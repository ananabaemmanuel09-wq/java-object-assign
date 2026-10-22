function merge settings(default settings,userSettings) {
  return {
     default settings,
     user settings,
     notifications: {
      default settings.notifications,
      (userSettings && usersettings.notifications? usersettings.notifications: {})
     }
    }
     }
  const defaultsettings ={
    theme: "light"
    fontsize: 14
    notifications:{
      email:true
      push:true
      sms:false
      frequency:"daily"
    }
    }
    const userSettings= {
      theme: "dark"
      fontsize:16,
      notifications: {
        email:false
        sms:true
      }
};
console.log ("1. Default settings");
console.log(defaultsettings);

console.log("\n2. User settings");
console.log(userSettings);

const mergedsettings=
mergedsettings(defaultsettings,userSettings);

console.log("\n3. merged settings");
console.log(mergedsettings);

console.log("\n4. Verification:");
console.log(- Overridden theme: "$ {mergedsettings.theme}"  (default was "ligh"));
console.log(- Overridden email notifications:  ${mergedsettings.notifications.email} (default was true));
console.log(- preserved push notifications: ${mergedsettings.notifications.push});
console.log(- preserved frequency: "${mergedsettings.notification.frequency}");

const defaultuntouched =defaultsettings.theme ==="light" && defaultsettings.notifications.email === true; const useruntouched=userSettings.theme=== "dark"&& userSettings.notifications.email===false;
console.log(- defaultsettings unchanged: ${defaultuntouched});
console.log(userSettings unchanged: ${useruntouched});