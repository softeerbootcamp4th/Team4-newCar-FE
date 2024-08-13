type UnsafeNonEmptyArray<T> = [T, ...T[]];
declare interface NonEmptyArray<T> extends UnsafeNonEmptyArray<T> {
	at(index: -1 | 0): T;
	at(index: number): T | undefined;
}

NonEmptyArray.prototype.at = <T>(this: NonEmptyArray<T>, index: number) => {
	const { length } = this;

	const relativeIndex = index < 0 ? length + index : index;

	return this[relativeIndex];
};
