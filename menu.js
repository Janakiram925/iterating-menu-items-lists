
function NavigationBar() {
  const navigationMenu = [
    {
      id: 'MANAGE',
      value: ['Account Lookup', 'CardOrder Request', 'Client Details']
    },
    {
      id: 'ENROLL',
      value: [
        'CardPack Enrollment',
        'Employee Self Enrollment',
        'File Submission History'
      ]
    },
    {
      id: 'FUND',
      value: [
        'Quickload',
        'File Upload',
        'Funding History',
        'Skyposit Blocks',
        'Fund settlement Accounts',
        'Sttlmt Acct Lookup'
      ]
    },
    {
      id: 'SUPPORT',
      value: [
        'Message Center',
        'Companies/Locations',
        'Reports',
        'Client Documents',
        'Email Notifications',
        'Info Center/ Broadcast'
      ]
    },
    {
      id: 'ADMIN',
      value: [
        'Reset Admin Access',
        'Manage Admins',
        'Manage Roles',
        'Manage Client Settings',
        'View Logs'
      ]
    }
  ];

  const handleHover = (hoveredMenu: any) => {
    hoveredMenu.children[0].style.display = 'block';
  };
  const handleLeave = (hoveredMenu: any) => {
    hoveredMenu.children[0].style.display = 'none';
  };

  return (
    <ul>
      {navigationMenu &&
        navigationMenu.map((menu: any, i: number) => {
          return (
            <li
              id={menu.id}
              key={i}
              onMouseOver={(e: any) => handleHover(e.currentTarget)}
              onMouseLeave={(e: any) => handleLeave(e.currentTarget)}
            >
              {menu.id}
              <ul>
                {menu.value &&
                  menu.value.map((SubMenuItems: any, i: any) => {
                    return (
                      <li key={i}>
                        {SubMenuItems}
                      </li>
                    );
                  })}
              </ul>
            </li>
          );
        })}
    </ul>
  );
};
