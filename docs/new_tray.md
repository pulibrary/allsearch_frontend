### Creating a new tray

1. If there is not an entry for the data source yet in src/enums/SearchScope.ts, add it.
1. Configure the title for your tray in src/config/ScopeTitleMap.ts
1. Configure the URL for the source in src/config/ScopeUrlMap.ts.  This will be shown to
the user when there are no results.
1. Configure the metadata fields that should be displayed in the tray in src/config/ScopeFieldsMap.ts.
For most fields, this gives only a very basic display.  If you need something more complex,
don't add it here.
1. If you need a more complex display of a metadata field, create a new component and
corresponding test in src/components/metadata.  Then reference your new component in the
switch/case statement in src/components/metadata/SearchMetadata.vue.
1. Add the tray to the appropriate location in src/components/TrayContainer.vue.
