function createChangeTracker(target) {
  const changeLog = [];

  const proxy = new Proxy(target, {
    set(targetObj, prop, value) {
      const isExisting = Object.prototype.hasOwnProperty.call(targetObj, prop);
      const previousValue = isExisting ? targetObj[prop] : undefined;
      const operation = isExisting ? "UPDATE" : "ADD";

      targetObj[prop] = value;

      changeLog.push({
        operation,
        property: String(prop),
        previousValue,
        newValue: value
      });

      return true;
    },

    deleteProperty(targetObj, prop) {
      if (Object.prototype.hasOwnProperty.call(targetObj, prop)) {
        const previousValue = targetObj[prop];
        delete targetObj[prop];

        changeLog.push({
          operation: "DELETE",
          property: String(prop),
          previousValue,
          newValue: undefined
        });

        return true;
      }
      return false;
    }
  });

  return { proxy, changeLog };
}

const profile = {
  username: "swaray_lead",
  department: "Engineering",
  location: "Singapore",
  preferences: { theme: "dark" }
};

console.log("Original Object:");
console.log(profile);

const tracker = createChangeTracker(profile);
const userProxy = tracker.proxy;

userProxy.role = "Lead Architect";
userProxy.location = "Tokyo";
delete userProxy.department;
userProxy.preferences.theme = "light";

console.log("\nFinal Object State:");
console.log(userProxy);

console.log("\nRecorded Change Log (Top-Level Only):");
for (const entry of tracker.changeLog) {
  console.log(`- [${entry.operation}] "${entry.property}" | previous: ${entry.previousValue} | new: ${entry.newValue}`);
}
