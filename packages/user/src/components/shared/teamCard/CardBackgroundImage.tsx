import { ImgHTMLAttributes } from 'react';

type CardBackgroundImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'className'>;

export default function CardBackgroundImage({ alt, ...props }: CardBackgroundImageProps) {
	return <img alt={alt} className="absolute inset-0 h-full w-full object-cover" {...props} />;
}
