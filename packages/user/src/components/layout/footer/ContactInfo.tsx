const CUSTOMER_SERVICE_NUMBER = '080-500-6000';

export default function ContactInfo() {
	return (
		<div className="gap flex flex-col items-center">
			<address className="flex gap-7 not-italic">
				<a href={`tel:${CUSTOMER_SERVICE_NUMBER}`}>캐스퍼 고객센터 : {CUSTOMER_SERVICE_NUMBER}</a>
				<p className="text-detail-1">주소 : 서울시 서초구 헌릉로 12</p>
			</address>
			<small className="text-detail-1 capitalize">
			COPYRIGHT © HYUNDAI MOTOR COMPANY, ALL RIGHTS RESERVED.
			</small>
		</div>
	);
}
