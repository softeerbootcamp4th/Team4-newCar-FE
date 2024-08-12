const EVENT_GUIDELINES = [
	{
		title:
			'1. 이벤트 내용과 기간 등 자세한 사항은 해당 이벤트 페이지를 통해 확인해주시기 바랍니다.',
		details: [
			'당사는 이벤트 내용 미숙지로 인한 불이익에 책임지지 않습니다.',
			'본 이벤트는 당사 사정에 따라 일정이 변경되거나 중단될 수 있습니다.',
		],
	},
	{
		title: '2. 아래의 사유에 해당되는 경우, 이벤트 당첨에서 제외되거나 당첨이 취소될 수 있습니다.',
		details: [
			'만 14세 미만인 경우',
			'회원정보에 등록된 휴대폰 번호를 통해 연락이 되지 않는 경우',
			'경품 수령을 위한 개인정보 공개에 동의하지 않거나 수령 의사를 밝히지 않은 경우',
			'발송된 이벤트 경품이 허위 정보 및 기타 사유로 반송된 경우',
			'이벤트 응모 또는 당첨 계정이 불법적, 비정상적으로 이벤트에 참여한 경우',
			'이벤트 경품을 상업적으로 이용하려는 경우',
		],
	},
	{
		title: '3. 당첨자 발표 및 선정',
		details: [
			'깜짝 선착순 퀴즈 당첨 인원은 1일 최대 100명입니다.',
			'깜짝 선착순 퀴즈 당첨 여부는 당첨 즉시 직접 페이지에서 확인 가능합니다.',
			'캐스퍼 레이싱 당첨 여부는 당첨 고객에게 개별 공지합니다.',
		],
	},
	{
		title: '4. 경품 배송',
		details: [
			'각 이벤트간 복수 당첨이 가능하며, 경품은 이 벤트 신청 시 등록하신 핸드폰 번호로 이벤트 종료 후 1주일 이내에 발송됩니다.',
			'경품 지급시점의 수취인 부재, 휴대폰 번호 불명 등의 사유가 1주일 이상 지속 시 경품이 지급되지 않을 수 있습니다.',
			'경품 배송은 당첨자 발표 후 개인정보 취합 기간이 종료되면 일괄 배송되며, 사정에 따라 연기될 수 있습니다.',
			'당첨자의 경품 배송을 위한 정보는 배송 업체로 전달됩니다. 이를 원치 않을 경우 당첨을 거부할 수 있습니다.',
			'수집된 당첨자의 개인정보는 본인 확인과 경품 발송 이외의 목적으로 사용되지 않음을 알려드립니다.',
			'모바일 상품권의 유효기간 연장 또는 등록된 휴대폰 번호 외의 다른 번호로의 재발송 및 고객 휴대폰의 착신정지 또는 문자 스팸 처리 등으로 인한 미수신에 따른 재발송은 불가능합니다.',
		],
	},
];

/** 이벤트 유의사항 섹션 */
export default function EventGuidelines() {
	return (
		<section className="container flex snap-start justify-center py-[66px]">
			<div className="flex flex-col gap-7">
				<h6 className="text-heading-10">유의사항</h6>
				<ul className="flex flex-col gap-7">
					{EVENT_GUIDELINES.map(({ title, details }) => (
						<li key={title} className="flex flex-col">
							<p className="text-detail-2">{title}</p>
							<ul className="flex flex-col">
								{details.map((detail) => (
									<li key={detail}>
										<p className="text-detail-2 text-neutral-200">{detail}</p>
									</li>
								))}
							</ul>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
