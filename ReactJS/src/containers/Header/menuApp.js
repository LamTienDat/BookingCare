export const adminMenu = [
  //quan li nguoi dung
  {
    name: "menu.admin.user-manage",
    menus: [
      {
        name: "menu.admin.crud",
        link: "/system/user-manage",
        // subMenus: [
        //   {
        //     name: "menu.system.system-administrator.user-manage",
        //     link: "/system/user-manage",
        //   },
      },
      {
        name: "menu.admin.crud-redux",
        link: "/system/user-redux",
      },
      {
        name: "menu.admin.manage-admin",
        link: "/system/user-admin",
      },
      {
        name: "menu.admin.manage-doctor",
        link: "/system/user-doctor",
      },
    ],
  },
  //quan li phong kham
  {
    name: "menu.admin.clinic",
    menus: [
      {
        name: "menu.admin.manage-clinic",
        link: "/system/manage-clinic",
        // subMenus: [
        //   {
        //     name: "menu.system.system-administrator.user-manage",
        //     link: "/system/user-manage",
        //   },
      },
    ],
  },
  //quan li chuyen khoa
  {
    name: "menu.admin.specialty",
    menus: [
      {
        name: "menu.admin.manage-specialty",
        link: "/system/manage-specialty",
        // subMenus: [
        //   {
        //     name: "menu.system.system-administrator.user-manage",
        //     link: "/system/user-manage",
        //   },
      },
    ],
  },
  //quan li cam nang
  {
    name: "menu.admin.handbook",
    menus: [
      {
        name: "menu.admin.manage-handbook",
        link: "/system/manage-handbook",
        // subMenus: [
        //   {
        //     name: "menu.system.system-administrator.user-manage",
        //     link: "/system/user-manage",
        //   },
      },
    ],
  },
];
