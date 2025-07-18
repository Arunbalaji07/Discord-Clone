import { cn } from '@/lib/utils';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

interface UserAvatarProps {
	src?: string;
	className?: string;
}

const UserAvatar = ({ src, className }: UserAvatarProps) => {
	return (
		<div>
			<Avatar className={cn(
				"h-7 w-7 md:h-10 md:w-10",
				className
			)}>
				<AvatarImage src={src} />
			</Avatar>
		</div>
	);
};

export default UserAvatar;
