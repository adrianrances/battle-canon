

const scriptsInEvents = {

	async Common_Event50_Act2(runtime, localVars)
	{
		window.parent.postMessage({ type: 'finished_crazy_cannons' }, '*');
	},

	async Common_Event54_Act2(runtime, localVars)
	{
		 window.parent.postMessage({ type: 'win_crazy_cannons', winner:runtime.globalVars.playerID }, '*');
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
