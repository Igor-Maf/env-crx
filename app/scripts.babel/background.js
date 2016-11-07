'use strict';

chrome.runtime.onInstalled.addListener((details) =>
    console.info('previousVersion', details.previousVersion)
);
