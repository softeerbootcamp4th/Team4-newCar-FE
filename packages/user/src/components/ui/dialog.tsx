import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { cva, VariantProps } from 'class-variance-authority';
import React from 'react';
import Close from 'src/assets/icons/close.svg?react';
import cn from 'src/utils/cn';

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Overlay>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Overlay
		ref={ref}
		className={cn(
			'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80',
			className,
		)}
		{...props}
	/>
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const dialogVariants = cva(
	`rounded-6 border-2 border-khaki-500 backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 aspect-[16/9] data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[50%] z-50 grid w-[960px] h-[540px] translate-x-[-50%] translate-y-[-50%] p-[30px] shadow-lg duration-200`,
	{
		variants: {
			variants: {
				default: 'bg-background/80 backdrop-blur-lg',
				pet: 'bg-gradient-pet',
				place: 'bg-gradient-place',
				travel: 'bg-gradient-travel',
				leisure: 'bg-gradient-leisure',
			},
		},
		defaultVariants: {
			variants: 'default',
		},
	},
);

export type DialogProps = React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> &
	VariantProps<typeof dialogVariants>;

const DialogContent = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Content>,
	DialogProps
>(({ className, variants, children, ...props }, ref) => {
	// const default = 'bg-popup-line opacity-70 '

	return (
		<DialogPortal>
			<DialogOverlay />
			<DialogPrimitive.Content
				className={cn(dialogVariants({ variants, className }))}
				ref={ref}
				{...props}
			>
				<VisuallyHidden.Root>
					<DialogTitle />
					<DialogDescription />
				</VisuallyHidden.Root>
				{children}
				<DialogPrimitive.Close className="ring-offset-background focus:ring-foreground data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-[30px] top-[30px] h-[30px] w-[30px] rounded-[2px] p-[4px] opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none">
					<Close className="h-full w-full" />
				</DialogPrimitive.Close>
			</DialogPrimitive.Content>
		</DialogPortal>
	);
});
DialogContent.displayName = DialogPrimitive.Content.displayName;

const DialogHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
	<div className={cn('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
);
DialogHeader.displayName = 'DialogHeader';

const DialogTitle = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Title>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Title
		ref={ref}
		className={cn('text-lg font-semibold leading-none tracking-tight', className)}
		{...props}
	/>
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
	React.ElementRef<typeof DialogPrimitive.Description>,
	React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
	<DialogPrimitive.Description
		ref={ref}
		className={cn('text-muted-foreground text-sm', className)}
		{...props}
	/>
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogOverlay,
	DialogPortal,
	DialogTrigger,
};
