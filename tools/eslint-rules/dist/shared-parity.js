export const prepareLocs = (locsArr) => {
    return locsArr.length > 3
        ? locsArr
            .slice(0, 3)
            .join(", ")
            .concat(`, … (+${locsArr.length - 3})`)
        : locsArr.join(", ");
};
export const formatDisplayKey = (fullPath) => {
    const relPath = fullPath.slice(1); // strip locale
    if (relPath.length === 0)
        return "";
    // collect trailing numeric indices
    let i = relPath.length - 1;
    const indices = [];
    // i >= 0 AND current indexed value is purely numeric (i.e., an array index)
    while (i >= 0 && /^\d+$/.test(relPath[i])) {
        indices.unshift(relPath[i]);
        i--;
    }
    const base = relPath[i];
    if (base !== undefined) {
        return base + indices.map((n) => `[${n}]`).join("");
    }
    // array directly under the locale (no named base key)
    // e.g. ["en","0","1"] -> "[0][1]"
    return indices.length
        ? `[${indices.join("][")}]`
        : relPath[relPath.length - 1];
};
