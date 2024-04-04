import { isNotNil, isEmpty, not, allPass, compose, isNil, anyPass } from "ramda";

// isNotNullOrEmpty:: any -> boolean
export const isNotNullOrEmpty = allPass([isNotNil, compose(not, isEmpty)]);

// isNilOrEmpty:: any -> boolean
export const isNilOrEmpty = anyPass([isNil, isEmpty]);