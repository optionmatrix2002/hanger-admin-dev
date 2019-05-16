import { Menu } from './menu.model';

export const verticalMenuItems = [ 
    //Parent tabs
    new Menu (1, 'Dashboard', '/dashboard', null, 'poll', null, false, 0),
    //new Menu (3, 'Moderate', '/posts', null, 'settings_input_svideo', null, true, 0),
    //new Menu (12, 'Manage Users', '/users/normalusers', null, 'group', null, true, 0),
    //new Menu (14, 'Reports & Violations', '/violations', null, 'report', null, true, 13),
    //new Menu (15, 'Prohibited Vocabulary', '/vocab', null, 'thumb_down', null, true, 13),
    //new Menu (16, 'IP Access', '/ip', null, 'rss_feed', null, true, 13),
    //new Menu (17, 'Notifications', '/notifications', null, 'notification_important', null, true, 13),
    new Menu (4, 'Moderate Members', '/users/normalusers', null, 'group', null, true, 0),
    //new Menu (8, 'Staff Users', '/users/staffusers', null, 'people_outline', null, false, 12), 
    //new Menu (5, 'Events', '/events', null, 'event', null, false, 3), 
    new Menu (6, 'Announcements ', '/announcements', null, 'announcement', null, false, 0),
    /* new Menu (6, 'Items', '/items', null, 'bookmarks', null, false, 0),  */
    /* new Menu (7, 'Messages', '/messages', null, 'message', null, false, 0),  */
    //new Menu (9, 'Posts', '/posts', null, 'navigation', null, false, 3),
    new Menu (2, 'Badges', '/badges', null, 'school', null, false, 0),
    //new Menu (10, 'Projects', '/projects', null, 'work', null, false, 3), 
    //new Menu (11, 'Gigs', '/gigs', null, 'work_outline', null, false, 3),
    //new Menu (13, 'Privacy ', '/violations', null, 'beach_access', null, true, 0),
    //Sub tabs in Admin
    /* new Menu (8, 'Setup', '/adminsettings/setup', null, 'build', null, false, 3), 
    new Menu (9, 'Structure', '/adminsettings/structure', null, 'memory', null, false, 3), 
    new Menu (10, 'Manage Users', '/adminsettings/manageusers', null, 'people_outline', null, false, 3), 
    new Menu (11, 'Preferences', '/adminsettings/preferences', null, 'chat_bubble', null, false, 3),
    new Menu (27, 'Target', '/adminsettings/target', null, 'done_all', null, false, 3), */

    //sub tabs in Predictive
    /* new Menu (12, 'Marketing', '/predictive/marketing', null, 'router', null, false, 4), 
    new Menu (13, 'Technology', '/predictive/technology', null, 'devices', null, false, 4),  */
    //sub tabs in System
    /* new Menu (14, 'Solutions', '/system/solutions', null, 'label', null, false, 5),
    new Menu (15, 'Progress', '/system/progress', null, 'data_usage', null, false, 5), 
    new Menu (16, 'Innovation', '/system/innovation', null, 'wb_incandescent', null, false, 5), 
    new Menu (17, 'Talent', '/system/talent', null, 'stars', null, false, 5),  */
    //sub tabs in Control
    /* new Menu (22, 'Infrastructure', '/control/infrastructure', null, 'domain', null, false, 6), 
    new Menu (23, 'Finance', '/control/finance', null, 'account_balance', null, false, 6), 
    new Menu (24, 'Statutory', '/control/statutory', null, 'gavel', null, false, 6),  */
    //sub tabs in Process
    /* new Menu (25, 'Projects', '/process/projects', null, 'timeline', null, false, 7), 
    new Menu (26, 'Quality', '/process/quality', null, 'track_changes', null, false, 7),  */
]

// export const horizontalMenuItems = [ 
//     new Menu (1, 'Dashboard', '/', null, 'dashboard', null, false, 0),
//     new Menu (2, 'Users', '/users', null, 'supervisor_account', null, false, 0), 
//     new Menu (3, 'UI Features', null, null, 'computer', null, true, 0),   
//     new Menu (4, 'Buttons', '/ui/buttons', null, 'keyboard', null, false, 3),  
//     new Menu (5, 'Cards', '/ui/cards', null, 'card_membership', null, false, 3), 
//     new Menu (6, 'Lists', '/ui/lists', null, 'list', null, false, 3), 
//     new Menu (7, 'Grids', '/ui/grids', null, 'grid_on', null, false, 3), 
//     new Menu (8, 'Tabs', '/ui/tabs', null, 'tab', null, false, 3), 
//     new Menu (9, 'Expansion Panel', '/ui/expansion-panel', null, 'dns', null, false, 3), 
//     new Menu (10, 'Chips', '/ui/chips', null, 'label', null, false, 3),
//     new Menu (11, 'Progress', '/ui/progress', null, 'data_usage', null, false, 3), 
//     new Menu (12, 'Dialog', '/ui/dialog', null, 'open_in_new', null, false, 3), 
//     new Menu (13, 'Tooltip', '/ui/tooltip', null, 'chat_bubble', null, false, 3), 
//     new Menu (14, 'Snackbar', '/ui/snack-bar', null, 'sms', null, false, 3),
//     new Menu (16, 'Mailbox', '/mailbox', null, 'email', null, false, 40), 
//     new Menu (17, 'Chat', '/chat', null, 'chat', null, false, 40), 
//     new Menu (20, 'Form Controls', null, null, 'dvr', null, true, 0), 
//     new Menu (21, 'Autocomplete', '/form-controls/autocomplete', null, 'short_text', null, false, 20), 
//     new Menu (22, 'Checkbox', '/form-controls/checkbox', null, 'check_box', null, false, 20), 
//     new Menu (23, 'Datepicker', '/form-controls/datepicker', null, 'today', null, false, 20), 
//     new Menu (24, 'Form field', '/form-controls/form-field', null, 'view_stream', null, false, 20), 
//     new Menu (25, 'Input', '/form-controls/input', null, 'input', null, false, 20), 
//     new Menu (26, 'Radio button', '/form-controls/radio-button', null, 'radio_button_checked', null, false, 20), 
//     new Menu (27, 'Select', '/form-controls/select', null, 'playlist_add_check', null, false, 20), 
//     new Menu (28, 'Slider', '/form-controls/slider', null, 'tune', null, false, 20), 
//     new Menu (29, 'Slide toggle', '/form-controls/slide-toggle', null, 'star_half', null, false, 20),    
//     new Menu (30, 'Tables', null, null, 'view_module', null, true, 0),
//     new Menu (31, 'Basic', '/tables/basic', null, 'view_column', null, false, 30), 
//     new Menu (32, 'Paging', '/tables/paging', null, 'last_page', null, false, 30), 
//     new Menu (33, 'Sorting', '/tables/sorting', null, 'sort', null, false, 30),
//     new Menu (34, 'Filtering', '/tables/filtering', null, 'format_line_spacing', null, false, 30),
//     new Menu (35, 'Selecting', '/tables/selecting', null, 'playlist_add_check', null, false, 30),
//     new Menu (36, 'NGX DataTable', '/tables/ngx-table', null, 'view_array', null, false, 30), 
//     new Menu (70, 'Charts', null, null, 'multiline_chart', null, true, 0),
//     new Menu (71, 'Bar Charts', '/charts/bar', null, 'insert_chart', null, false, 70),
//     new Menu (72, 'Pie Charts', '/charts/pie', null, 'pie_chart', null, false, 70),
//     new Menu (73, 'Line Charts', '/charts/line', null, 'show_chart', null, false, 70),
//     new Menu (74, 'Bubble Charts', '/charts/bubble', null, 'bubble_chart', null, false, 70), 
//     new Menu (66, 'Maps', null, null, 'map', null, true, 70),
//     new Menu (67, 'Google Maps', '/maps/googlemaps', null, 'location_on', null, false, 66),
//     new Menu (68, 'Leaflet Maps', '/maps/leafletmaps', null, 'my_location', null, false, 66),
//     new Menu (81, 'Drag & Drop', '/drag-drop', null, 'mouse', null, false, 3), 
//     new Menu (85, 'Material Icons', '/icons', null, 'insert_emoticon', null, false, 3),
//     new Menu (40, 'Pages', null, null, 'library_books', null, true, 0),
//     new Menu (43, 'Login', '/login', null, 'exit_to_app', null, false, 40),    
//     new Menu (44, 'Register', '/register', null, 'person_add', null, false, 40),
//     new Menu (45, 'Blank', '/blank', null, 'check_box_outline_blank', null, false, 40),
//     new Menu (46, 'Page Not Found', '/pagenotfound', null, 'error_outline', null, false, 40),
//     new Menu (47, 'Error', '/error', null, 'warning', null, false, 40),
//     new Menu (48, 'Landing', '/landing', null, 'filter', null, false, 40),
//     new Menu (50, 'Schedule', '/schedule', null, 'event', null, false, 40),
//     new Menu (200, 'External Link', null, 'http://themeseason.com', 'open_in_new', '_blank', false, 40)
// ]


export const horizontalMenuItems = [  
    //Parent tabs
    new Menu (1, 'Dashboard', '/dashboard', null, 'poll', null, false, 0),
    //new Menu (3, 'Moderate', '/posts', null, 'settings_input_svideo', null, true, 0),
    //new Menu (12, 'Manage Users', '/users/normalusers', null, 'group', null, true, 0),
    //new Menu (14, 'Reports & Violations', '/violations', null, 'report', null, true, 13),
    //new Menu (15, 'Prohibited Vocabulary', '/vocab', null, 'thumb_down', null, true, 13),
    //new Menu (16, 'IP Access', '/ip', null, 'rss_feed', null, true, 13),
    //new Menu (17, 'Notifications', '/notifications', null, 'notification_important', null, true, 13),
    new Menu (4, 'Moderate Members', '/users/normalusers', null, 'group', null, true, 0),
    //new Menu (8, 'Staff Users', '/users/staffusers', null, 'people_outline', null, false, 12), 
    //new Menu (5, 'Events', '/events', null, 'event', null, false, 3), 
    new Menu (6, 'Announcements ', '/announcements', null, 'announcement', null, false, 0),
    /* new Menu (6, 'Items', '/items', null, 'bookmarks', null, false, 0),  */
    /* new Menu (7, 'Messages', '/messages', null, 'message', null, false, 0),  */
    //new Menu (9, 'Posts', '/posts', null, 'navigation', null, false, 3),
    new Menu (2, 'Badges', '/badges', null, 'school', null, false, 0),
    //new Menu (10, 'Projects', '/projects', null, 'work', null, false, 3), 
    //new Menu (11, 'Gigs', '/gigs', null, 'work_outline', null, false, 3),
    //new Menu (13, 'Privacy ', '/violations', null, 'beach_access', null, true, 0),
    //Sub tabs in Admin
    /* new Menu (8, 'Setup', '/adminsettings/setup', null, 'build', null, false, 3), 
    new Menu (9, 'Structure', '/adminsettings/structure', null, 'memory', null, false, 3), 
    new Menu (10, 'Manage Users', '/adminsettings/manageusers', null, 'people_outline', null, false, 3), 
    new Menu (11, 'Preferences', '/adminsettings/preferences', null, 'chat_bubble', null, false, 3),
    new Menu (27, 'Target', '/adminsettings/target', null, 'done_all', null, false, 3), */

    //sub tabs in Predictive
    /* new Menu (12, 'Marketing', '/predictive/marketing', null, 'router', null, false, 4), 
    new Menu (13, 'Technology', '/predictive/technology', null, 'devices', null, false, 4),  */
    //sub tabs in System
    /* new Menu (14, 'Solutions', '/system/solutions', null, 'label', null, false, 5),
    new Menu (15, 'Progress', '/system/progress', null, 'data_usage', null, false, 5), 
    new Menu (16, 'Innovation', '/system/innovation', null, 'wb_incandescent', null, false, 5), 
    new Menu (17, 'Talent', '/system/talent', null, 'stars', null, false, 5),  */
    //sub tabs in Control
    /* new Menu (22, 'Infrastructure', '/control/infrastructure', null, 'domain', null, false, 6), 
    new Menu (23, 'Finance', '/control/finance', null, 'account_balance', null, false, 6), 
    new Menu (24, 'Statutory', '/control/statutory', null, 'gavel', null, false, 6),  */
    //sub tabs in Process
    /* new Menu (25, 'Projects', '/process/projects', null, 'timeline', null, false, 7), 
    new Menu (26, 'Quality', '/process/quality', null, 'track_changes', null, false, 7),  */
    
]