'use client';
import { Spin } from 'antd';

const Loader = () => {
	return (
		<div className='flex justify-center mt-20'>
			<Spin size='large' />
		</div>
	);
};

export default Loader;
