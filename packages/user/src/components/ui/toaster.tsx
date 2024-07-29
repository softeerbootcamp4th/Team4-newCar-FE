import { Toast, ToastDescription, ToastProvider, ToastViewport } from 'src/components/ui/toast';
import { useToast } from 'src/components/ui/use-toast';

export function Toaster() {
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
