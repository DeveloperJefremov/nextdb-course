import { GetCurrentUserFromMongoDB } from '@/actions/users';
import prisma from '@/config/db';
import ClientSidePropertiesTable from './properties-table-clientside';

const PropertiesTable = async ({
	searchParams,
	fromAdmin = false,
}: {
	searchParams: any;
	fromAdmin?:boolean;
}) => {
	const user = await GetCurrentUserFromMongoDB();

const whereCondition = searchParams
if(!fromAdmin) {
	whereCondition.userId = user?.data?.id
}

	const properties = await prisma.property.findMany({
		orderBy: { updatedAt: 'desc' },
		where: whereCondition,
	});

	return (
		<div>
			<ClientSidePropertiesTable properties={properties} />
		</div>
	);
};

export default PropertiesTable;
