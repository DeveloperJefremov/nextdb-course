import Filters from '@/components/filters';
import LinkButton from '@/components/link-button';
import Loader from '@/components/loader';
import PageTitle from '@/components/page-title';
import React, { Suspense } from 'react';
import PropertiesTable from './_components/properties-table';

function Properties({ searchParams }: { searchParams: any }) {
	const key = JSON.stringify(searchParams);
	return (
		<div>
			<div className='flex justify-between items-center'>
				<PageTitle title='Properties' />
				<LinkButton
					title='Create Property'
					path='/user/properties/create-property'
				/>
			</div>
			<Filters searchParams={searchParams} />
			<Suspense fallback={<Loader />} key={key}>
				<PropertiesTable searchParams={searchParams} />
			</Suspense>
		</div>
	);
}

export default Properties;
