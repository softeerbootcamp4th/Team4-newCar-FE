import {
	Toast,
	ToastDescription,
	ToastProvider,
	ToastViewport,
} from 'src/components/common/toast/Toast';
import useToast from 'src/hooks/useToast';

export default function ToasterStack() {
	const { toasts } = useToast();

	return (
		<ToastProvider>
			{toasts.map(function ({ id, title, description, action, ...props }) {
				return (
					<Toast key={id} {...props}>
						<div className="grid gap-1">
							<ToastDescription>{description}</ToastDescription>
						</div>
						{action}
					</Toast>
				);
			})}
			<ToastViewport />
		</ToastProvider>
	);
}
