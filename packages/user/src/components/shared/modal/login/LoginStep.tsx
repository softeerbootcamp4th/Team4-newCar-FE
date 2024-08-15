/* eslint-disable no-return-assign */
import { FormEvent, useRef } from 'react';
import Button from 'src/components/common/Button.tsx';
import useSubmitLogin, { SubmitLoginRequest } from 'src/hooks/query/useSubmitLogin.ts';
import inputStyles from 'src/styles/input.ts';

const SUBMIT_BUTTON_ID = 'submit-only-for-login';

interface LoginStepProps {
	onSuccess: () => void;
}

// TODO: KAKAO OAuth
export default function LoginStep({ onSuccess }: LoginStepProps) {
	const { mutate: login } = useSubmitLogin();

	const inputRefs = useRef<HTMLInputElement[]>([]);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		e.stopPropagation();
		const submitData = { userId: inputRefs.current[0].value, password: inputRefs.current[1].value };
		if (hasRequiredLoginFields(submitData)) {
			login(submitData, { onSuccess });
		}
	};

	return (
		<form
			id={SUBMIT_BUTTON_ID}
			onSubmit={handleSubmit}
			className="flex h-full w-full flex-col items-center justify-center gap-12"
		>
			<p className="text-heading-9 text-center font-bold">
				이벤트 참여를 위해
				<br />
				<strong>로그인</strong>을 진행해주세요
			</p>
			<div className="flex flex-col items-center justify-center gap-5">
				<input
					type="text"
					defaultValue="user"
					name="userId"
					placeholder="ID"
					autoComplete="id"
					ref={(el) => (inputRefs.current[0] = el!)}
					className={loginInputStyles}
				/>
				<input
					type="password"
					defaultValue="1234"
					name="password"
					autoComplete="current-password"
					placeholder="PASSWORD"
					ref={(el) => (inputRefs.current[1] = el!)}
					className={loginInputStyles}
				/>
			</div>
			<Button type="submit" form={SUBMIT_BUTTON_ID}>
				회원가입
			</Button>
		</form>
	);
}

/** Helper Function */
function hasRequiredLoginFields(inputs: Partial<SubmitLoginRequest>): inputs is SubmitLoginRequest {
	return typeof inputs.userId === 'string' && typeof inputs.password === 'string';
}

const loginInputStyles = `${inputStyles} border border-foreground focus-visible:ring-primary rounded-2.5 h-[54px] w-[450px] bg-neutral-800 p-3 placeholder:text-neutral-300`;
