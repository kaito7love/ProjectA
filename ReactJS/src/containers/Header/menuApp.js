export const adminMenu = [
    { //Manage users
        name: 'menu.admin.user', menus: [
            {
                name: 'menu.admin.manage-user', link: '/system/user-manage'
                // subMenus: [
                // { name: 'menu.system.system-administrator.user-manage', link: '/system/user-manage' },
                // { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
                // ]
            },
            {
                name: 'menu.admin.manage-admin', link: '/system/user-redux'
            }, 
            {
                name: 'menu.admin.manage-doctor', link: '/system/manage-doctor'
            }, 
            {
                name: 'menu.admin.crud-redux', link: '/system/user-admin'
            },
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
    },
    { //Manage clinic
        name: 'menu.admin.clinic', menus: [
            {
                name: 'menu.admin.manage-clinic', link: '/system/clinic-manage'
            },
        ]
    },
    { //Manage specialty
        name: 'menu.admin.specialty', menus: [
            {
                name: 'menu.admin.manage-specialty', link: '/system/specialty-manage'
            },
        ]
    },
    { //Manage blog
        name: 'menu.admin.blog', menus: [
            {
                name: 'menu.admin.manage-blog', link: '/system/blog-manage'
            },
        ]
    },

];