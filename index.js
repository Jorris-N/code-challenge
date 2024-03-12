function sanitizeDatabase (frontEndData, flattenedDbColumns, KeysToKeep){
    const sanitizedData = {};
    const processValue = (value, key) => {
        if (typeof value === 'object' && value !==null) {
            return processObject (value, key);
        } else if (flattenedDbColumns.hasOwnProperty (key)) {
            return value;
        } else {
            return KeysToKeep.includes(key) ? value : undefined;
        }
    };

    const processObject = (obj, parentKey) => {
        const processedObj = {};
        for (const key in obj) {
            const newKey = parentKey ? `${parentKey}.${key}` : key;
            const processedValue = processValue (obj[key], newKey);
            if (processedValue !== undefined) {
                processedObj [newKey] = processedValue;
            }
        }
        return processedObj;
    };

    const processedTopObject = processObject(frontEndData);

    for (const key of KeysToKeep) {
        if (!processedTopObject.hasOwnProperty(key) && frontEndData.hasOwnProperty(key)){
            sanitizedData[key] = frontEndData[key];
        }
    }
    return Object.assign({}, sanitizedData, processedTopObject);
}