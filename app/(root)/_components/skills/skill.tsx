import { Badge } from '@/components/ui/badge';
import React from 'react';

interface UserCardProps {
	title: string;
}

function Skill({ title }: UserCardProps) {
	return (
		<div className='flex'>
			<Badge>{title}</Badge>
		</div>
	);
}

export default Skill;
