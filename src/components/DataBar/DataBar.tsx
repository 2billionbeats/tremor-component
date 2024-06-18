import { Card, CategoryBar } from '@tremor/react';

export function DataBar({
	cursor,
	mode = 'normal',
	upperLimit,
	lowerLimit,
}: {
	cursor: number;
	mode?: 'normal' | 'shrink' | 'magnify';
	upperLimit?: number;
	lowerLimit?: number;
}) {
	const values = [];
	let gap = 0;
	const scale = { normal: 1, shrink: 0.5, magnify: 2 }[mode];

	if (upperLimit && lowerLimit) {
		gap = (upperLimit - lowerLimit) / 50;

		values.push(gap * 12.5, gap * 12.5, gap * 50, gap * 12.5, gap * 12.5);

		const markerValue = cursor - (lowerLimit - gap * 25);

		return (
			<>
				<div className="space-y-3">
					<Card className="max-w-sm">
						<CategoryBar
							showLabels={false}
							values={values}
							colors={['orange', 'yellow', 'green', 'yellow', 'orange']}
							markerValue={markerValue}
						/>
					</Card>
				</div>
			</>
		);
	}

	if (lowerLimit && !upperLimit) {
		gap = lowerLimit / 2;
		return (
			<>
				<div className="space-y-3">
					<Card className="max-w-sm">
						<CategoryBar
							showLabels={false}
							values={[gap, gap, gap * 3]}
							colors={['orange', 'yellow', 'green']}
							markerValue={cursor}
						/>
					</Card>
				</div>
			</>
		);
	}

	if (!lowerLimit && upperLimit) {
		gap = upperLimit / 3;
		return (
			<>
				<div className="space-y-3">
					<Card className="max-w-sm">
						<CategoryBar
							showLabels={false}
							values={[gap * 3, gap, gap]}
							colors={['green', 'yellow', 'orange']}
							markerValue={cursor}
						/>
					</Card>
				</div>
			</>
		);
	}
}
