/**
 * Returns the value of the system environment variable with the provided name
 */
module.exports.templateTags = [{
    name: 'system_env',
    displayName: 'System Variable',
    description: 'Get value of a system environment variable',
    args: [
        {
            displayName: 'System Variable Name',
            description: 'Name of the system environment variable to get the value for',
            type: 'string',
            defaultValue: 'USERNAME'
        }
    ],
    async run (context, name) {
        return process.env[name];
    }
}];