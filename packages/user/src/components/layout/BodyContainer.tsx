export default function BodyContainer({ children }: React.PropsWithChildren) {
	return (
		<main className="container flex-grow">
			{children}
		</main>
	);
}
