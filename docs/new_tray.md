### Creating a new tray

1. If there is not an entry for the data source yet in src/enums/SearchScope.ts, add it.
1. Configure the title for your tray in src/config/ScopeTitleMap.ts
1. Configure the URL for the source in src/config/ScopeUrlMap.ts. This will be shown to
   the user when there are no results.
1. Configure the metadata fields that should be displayed in the tray in src/config/ScopeFieldsMap.ts.
   For most fields, this gives only a very basic display. If you need something more complex,
   don't add it here.
1. If you need a more complex display of a metadata field, create a new component and
   corresponding test in src/components/metadata. Then reference your new component
   with a `v-if` in src/components/SearchTray.vue.
1. Add the tray to the appropriate location in src/models/TrayOrder.ts.
    * If you want to do this in a test-driven way, you can:
        1. Add a new fixture to src/fixtures
        1. Add a new test file to src/components/metadata, referencing data from your fixture
        1. Add a new component to src/components/metadata to make your test pass
        1. Add a failing test to src/components/metadata/SearchMetadata.test.ts for your search scope.
        1. Add to the switch/case statement to make it pass.
1. Configure the tray's icon in src/config/ScopeIconMap.ts.  If the icon isn't in
assets/app.css, add it there. You can find the appropriate value in
[orangelight](https://github.com/pulibrary/orangelight/blob/main/app/assets/stylesheets/icons/variables.scss).
