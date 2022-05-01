const teacher = [
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    to: '/teacher-dashboard',
  },
  {
    title: 'Demo Management',
    icon: 'mdi-account',
    children: [
      {
        title: 'Take Traning',
        icon: 'mdi-account',
      },
      {
        title: 'Review Demo Feedback',
        icon: 'mdi-clipboard-list-outline',
      },
      {
        title: 'Upadate Student Feedback',
        icon: 'mdi-clipboard-list-outline',
      },
    ],
  },
  {
    title: 'Interact With Parents/Students',
    icon: 'mdi-clipboard-list-outline',
  },
  {
    title: 'Access Class Done Previously',
    icon: 'mdi-clipboard-list-outline',
  },
  {
    title: 'Recommendation For Next Class',
    icon: 'mdi-clipboard-list-outline',
  },
  {
    title: 'Logs Parent Interaction',
    icon: 'mdi-clipboard-list-outline',
  },
];
const admin = [
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    to: '/admin-dashboard',
  },
  {
    title: 'Management',
    icon: 'mdi-file-multiple-outline',
    children: [
      {
        title: 'Manage Teams',
        icon: 'mdi-text-box-plus-outline',
      },
      {
        title: 'Manage Master Lists',
        icon: 'mdi-chart-box-outline',
      },
      {
        title: 'Manage Subscriptions',
        icon: 'mdi-chart-box-outline',
      },
    ],
  },
  {
    title: 'Analytics',
    icon: 'mdi-text-box-search-outline',
  },
  {
    title: 'Payment Overview',
    icon: 'mdi-text-box-search-outline',
  },
];

const student = [
  {
    title: 'Dashboard',
    icon: 'mdi-view-dashboard',
    to: '/student-dashboard',
  },
  {
    title: 'Task Management',
    icon: 'mdi-file-multiple-outline',
    children: [
      {
        title: 'Schedule Demo',
        icon: 'mdi-text-box-plus-outline',
      },
      {
        title: 'Provide Demo Feedback',
        icon: 'mdi-chart-box-outline',
      },
      {
        title: 'Subscribe courses',
        icon: 'mdi-chart-box-outline',
      },
      {
        title: 'Schedule Session',
        icon: 'mdi-chart-box-outline',
      },
    ],
  },
  {
    title: 'Take Assignments',
    icon: 'mdi-text-box-search-outline',
  },
  {
    title: 'Receive Assessment',
    icon: 'mdi-text-box-search-outline',
  },
  {
    title: 'Upgrades Subscription',
    icon: 'mdi-text-box-search-outline',
  },
];

export default (user) => {
  let menu = [];
  if (user.type === 'admin') {
    menu = admin;
  }
  if (user.type === 'teacher') {
    menu = teacher;
  }
  if (user.type === 'student') {
    menu = student;
  }
  return menu;
};
