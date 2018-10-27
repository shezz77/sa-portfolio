export const AppGlobals = {
    app: {
        name: 'sa-portfolio',
    },
    portfolio: {
        name: 'Shehzad Aslam',
        description: `I am a MIT Gold Medalist. 
        I am specialised Laravel and ReactJS software engineering with 2+ years of practical experience on real world Web and Mobile applications.
        I am a lead developer at ExperindSol and handle all kind of projects as tech lead there which means I do code myself, assign tasks to my team, manage and track tasks, check code quality and standards, communicate directly with clients on voice/video calls, mentor team and ensure to update our tech stack with latest releases etc. 
        I am 26 years old and live with my parents and a brother in beautiful city of Pakistan, Lahore. 
        I love travelling and exploring nature, so I do plan yearly trips to beautiful areas of Pakistan such as Murree, Nathiagali, Naran Kaghan, Fairy Meadows, Killer Mountain (Nanga Parbat), K2 Base Camp, Khunjrab Pas, Skardu and many more.`,
        nickName: 'sa',
        emails: [
            {
                type: 'primary',
                address: 'shehzada.se@gmail.com',
            },
            {
                type: 'secondary',
                address: 'shehzada.pk786@gmail.com',
            },
            {
                type: 'professional',
                address: 'shehzada.se@hotmail.com',
            },
        ],

        phone_numbers: [
            {
                type: 'primary',
                phone: '+92 300 9878282',
            },
            {
                type: 'secondary',
                phone: '+92 301 6608822',
            }
        ],

        job: {
            title: 'Senior Software Engineer',
            company: 'Powersoft19',
            website: 'http://www.powersoft19.com'
        },

        experience: [
            {
                designation: 'Senior software engineer',
                Responsibility: ['laravel', 'reactjs', 'electron', 'aws', 'mysql'],
                start: '2018-04-25',
                end: 'present',
                reason_for_leaving: '',
                company: {
                    name: 'Experintsol',
                    type: 'IT',
                    description: 'USA based software company',
                    website: 'http://experintsol.com'
                }
            },
            {
                designation: 'Software engineer',
                Responsibility: ['laravel', 'mysql'],
                start: '2016-08-01',
                end: '2017-09-01',
                reason_for_leaving: '',
                company: {
                    name: 'VU Software house',
                    type: 'IT',
                    description: 'Virtual University Software house',
                    website: 'https://www.facebook.com/VUSWH'
                }
            },
            {
                designation: 'Senior software engineer',
                Responsibility: ['laravel', 'reactjs', 'vuejs', 'ios', 'mysql'],
                start: '2017-09-02',
                end: '2018-04-24',
                reason_for_leaving: '',
                company: {
                    name: 'Larasoft',
                    type: 'IT',
                    description: 'UK based software company',
                    website: 'http://larasoft.io'
                }
            }
        ],

        skills: [
            {
                name: 'Laravel',
                levelInPercent: '90',
                experienceInMonths: '24',
                startDate: '02-sep-2018'
            },
            {
                name: 'ReactJS',
                levelInPercent: '90',
                experienceInMonths: '24',
                startDate: '02-sep-2018'
            },
            {
                name: 'IOS',
                levelInPercent: '70',
                experienceInMonths: '24',
                startDate: '02-sep-2018'
            },
            {
                name: 'Electron',
                levelInPercent: '60',
                experienceInMonths: '24',
                startDate: '02-sep-2018'
            },
            {
                name: 'MySQL',
                levelInPercent: '70',
                experienceInMonths: '24',
                startDate: '02-sep-2018'
            },
            {
                name: 'Git',
                levelInPercent: '90',
                experienceInMonths: '24',
                startDate: '02-sep-2018'
            },
        ],
        professional: {
            title: 'Software Engineer',
            mainSkills: ['ReactJS', 'Laravel', 'NodeJS']
        },
        socialLinks: [
            {
                name: 'facebook',
                url: 'https://www.facebook.com/shehzada.se',
                faIcon: 'fa fa-facebook'
            },
            {
                name: 'linkedin',
                url: 'https://www.linkedin.com/in/shehzada-se',
                faIcon: 'fa fa-linkedin'
            },
            {
                name: 'twitter',
                url: 'https://twitter.com/PkShehzada',
                faIcon: 'fa fa-twitter'
            },
            {
                name: 'github',
                url: 'https://github.com/shehzada72',
                faIcon: 'fa fa-github'
            }
        ]
    },
    mainMenu: [
        {
            title: 'Home',
            href: 'intro-sec'
        },
        {
            title: 'About',
            href: 'about-sec'
        },
        {
            title: 'Resume',
            href: 'resume-sec'
        },
        {
            title: 'Portfolio',
            href: 'portfolio-sec'
        },
        {
            title: 'Services',
            href: 'services-sec'
        },
        {
            title: 'Contact',
            href: 'contact-sec'
        }
    ]
};