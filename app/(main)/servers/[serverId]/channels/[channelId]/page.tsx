import React from 'react';

import { redirect } from 'next/navigation';

import { db } from '@/lib/db';
import { currentProfile } from '@/lib/current-profile';
import ChatHeader from '@/components/chat/chat-header';

interface ChannelIdPageProps {
	params: {
		serverId: string;
		channelId: string;
	}
}

const ChannelIdPage = async ({ params }: ChannelIdPageProps) => {
	const profile = await currentProfile();

	if (!profile) {
		return redirect(`/`);
	}

	const channel = await db.channel.findUnique({
		where: {
			id: params.channelId
		}
	})

	const member = await db.member.findFirst({
		where: {
			serverId: params.serverId,
			profileId: profile.id
		}
	})

	if (!channel || !member) {
		return redirect(`/`);
	}

	return (
		<div className={`bg-white dark:bg-[#313338] flex flex-col h-full`}>
			<ChatHeader name={channel.name} serverId={channel.serverId} type="channel" />
		</div>
	);
};

export default ChannelIdPage;