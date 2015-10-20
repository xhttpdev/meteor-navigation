Navigation = {
    settings: {
        brand: null,
        fixed: true,
        fixedPos: 'top',
        inverse: false,
        showLogout: false,
        showAccount: false,
        language: 'en-GB'
    },

    language: {
        'de': {
            settingsText: 'Einstellungen',
            settingsPanelText: 'Navigations Einstellungen',
            newButton: 'Neu',
            columnText: 'Text',
            columnRoute: 'Route',
            columnHidden: 'Versteckt',
            columnAction: 'Aktion',
            columnTipCreate: 'Unterpunk erstellen',
            columnTipEdit: 'Bearbeiten',
            columnTipUp: 'Hoch',
            columnTipDown: 'Herunter',
            columnTipDelete: 'Löschen',
            modalExtraClass: 'Extra Class',
            modalOption: 'Option',
            modalType: 'Typ',
            modalCollapsable: 'Einklappbar',
            deleteConfirmationText: 'Soll der Navigationspunkt {text} wirklich gelöscht werden?'
        },
        'en-GB': {
            settingsText: 'Settings',
            settingsPanelText: 'Navigation Settings',
            newButton: 'New',
            columnText: 'Text',
            columnRoute: 'Route',
            columnHidden: 'Hidden',
            columnAction: 'Action',
            columnTipCreate: 'Create Node',
            columnTipEdit: 'Edit',
            columnTipUp: 'Up',
            columnTipDown: 'Down',
            columnTipDelete: 'Delete',
            modalExtraClass: 'Extra Class',
            modalOption: 'Option',
            modalType: 'Type',
            modalCollapsable: 'Collabsable',
            deleteConfirmationText: 'Are you sure you want to delete {text}?'
        }
    },

    /**
     * @param {String} language
     * @param {Object} config
     */
    addTranslations: function (language, config) {
        this.language[language] = config;
    },

    /**
     * @param {Object} config
     */
    config: function (config) {
        this.settings = _.extend(this.settings, config);
    },

    /**
     * @param {String} key
     * @param {Object} vars
     * @returns {String}
     */
    getText: function (key, vars) {
        var text = this.language[this.settings.language][key];

        if (vars !== undefined) {
            _.each(vars, function (value, property) {
                text = text.replace('{' + property + '}', value);
            });
        }

        return text;
    }
};

Template.registerHelper("getNavigationText", function (key) {
    return Navigation.getText(key);
});
