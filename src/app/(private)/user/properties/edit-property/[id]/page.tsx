import PageTitle from '@/components/page-title';
import prisma from '@/config/db';
import PropertiesForm from '../../_components/properties-form';

interface Props {
	params: { id: string };
}
const EditPropertyPage = async ({ params }: Props) => {
	const property = await prisma.property.findUnique({
		where: {
			id: params.id,
		},
	});
	return (
		<div>
			<PageTitle title='Edit Property' />
			<PropertiesForm initialValues={property} isEdit={true} />
		</div>
	);
};

export default EditPropertyPage;
