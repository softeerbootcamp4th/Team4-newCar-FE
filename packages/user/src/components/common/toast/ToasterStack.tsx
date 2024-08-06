import {
	Toast,
	ToastDescription,
	ToastProvider,
	ToastViewport,
} from 'src/components/common/toast/Toast.tsx';
import { useToast } from 'src/hooks/useToast.ts';

export default function ToasterStack() {
	const { toasts } = useToast();

	return (
		<ToastProvider>
			{toasts.map(({ id, title, description, action, ...props }) => (
				<Toast key={id} {...props}>
					<div className="grid gap-1">
						<ToastDescription>{description}</ToastDescription>
					</div>
					{action}
				</Toast>
			))}
			<ToastViewport />
		</ToastProvider>
	);
}
