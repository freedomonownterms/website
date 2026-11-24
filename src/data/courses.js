// "Courses" pages: video lessons in a series, each written out with its pictures.
// Made by private/youtube/export-courses.mjs, then reviewed. Lessons in order.
export const courses = [
  {
    "slug": "postgresql",
    "title": "PostgreSQL DBA Course",
    "short": "PostgreSQL",
    "description": "Learn PostgreSQL from zero, the way a database administrator needs it: what it is, where it came from, how it works inside, and how to run it. Free video lessons, each also written out with pictures.",
    "level": "Beginner to DBA",
    "playlist": "https://www.youtube.com/playlist?list=PLS6weA_IIhQ4",
    "lessons": [
      {
        "n": 1,
        "slug": "introduction",
        "youtubeId": "tL3P27NZj2Y",
        "uploaded": "2026-11-23T16:15:20Z",
        "seconds": 1868,
        "title": "PostgreSQL Full Introduction: Why, History, EDB and Architecture",
        "description": "What PostgreSQL is, why companies moved to it, where it came from, who supports it (community and EDB), and a first look at how it works inside: processes, memory, storage and the journey of a query.",
        "chapters": [
          [
            "0:00",
            "Intro and today's plan"
          ],
          [
            "1:09",
            "What is a database?"
          ],
          [
            "2:31",
            "Structured data and relational databases"
          ],
          [
            "3:19",
            "SQL basics"
          ],
          [
            "4:07",
            "Why companies looked for an alternative"
          ],
          [
            "5:10",
            "The wish list: free, OLTP and OLAP"
          ],
          [
            "7:03",
            "ACID: all or nothing"
          ],
          [
            "7:47",
            "Security and pg_hba.conf"
          ],
          [
            "8:30",
            "High availability and replication"
          ],
          [
            "9:59",
            "Disaster recovery and point-in-time recovery"
          ],
          [
            "11:15",
            "Logical and physical backups"
          ],
          [
            "11:56",
            "Why PostgreSQL ticks every box"
          ],
          [
            "12:42",
            "History: from Ingres to PostgreSQL"
          ],
          [
            "14:22",
            "Why an elephant?"
          ],
          [
            "14:44",
            "The licence and the community"
          ],
          [
            "16:10",
            "The early years: from doubt to trust"
          ],
          [
            "17:14",
            "Versions and releases"
          ],
          [
            "18:41",
            "DBMS of the Year"
          ],
          [
            "19:19",
            "Who supports PostgreSQL?"
          ],
          [
            "20:30",
            "EDB vs community PostgreSQL"
          ],
          [
            "23:22",
            "PostgreSQL today: cloud and extensions"
          ],
          [
            "24:32",
            "Interview tip and an Oracle-to-PostgreSQL map"
          ],
          [
            "25:20",
            "Why learn the architecture"
          ],
          [
            "26:53",
            "Processes, memory and storage"
          ],
          [
            "27:47",
            "End users, interfaces and client-server"
          ],
          [
            "29:12",
            "The journey of a query"
          ],
          [
            "29:36",
            "What a PostgreSQL DBA does"
          ],
          [
            "29:57",
            "How to start"
          ],
          [
            "30:20",
            "Recap"
          ]
        ],
        "sections": [
          {
            "label": "Welcome",
            "heading": "Hello, and welcome!",
            "text": "Hi, hello everyone, and welcome! This is the start of our PostgreSQL series. I'm really glad you're here. If you've ever wondered what PostgreSQL is, why so many companies are moving to it, and what a PostgreSQL database administrator actually does, this video is for you. So grab a cup of tea or coffee, because we're going to take our time and explain everything simply, step by step, with lots of everyday examples."
          },
          {
            "label": "Today's plan",
            "heading": "Six stops on today's journey",
            "text": "Here's our plan for today. First, we'll understand what a database is, and why companies went looking for a new one. Then we'll go through their wish list, one item at a time. After that, we'll travel through the history of PostgreSQL, see how it became popular, and look at who supports it, including a company called EDB. Finally, we'll take our first steps into PostgreSQL architecture. Let's begin.",
            "image": "/courses/postgresql/introduction/02.webp"
          },
          {
            "label": "Who this is for",
            "heading": "Freshers, DBAs and developers",
            "text": "Who is this video for? If you're a fresher starting your career in databases, this is a perfect first step. If you're already an Oracle or SQL Server database administrator, and you want to add PostgreSQL to your skills, you'll find plenty of familiar ideas here. And if you're a developer who wants to understand what happens behind the database, welcome too. No prior PostgreSQL knowledge is needed.",
            "caption": "No prior PostgreSQL knowledge needed."
          },
          {
            "label": "First things first",
            "heading": "A database stores organised data",
            "text": "Let's start at the very beginning. What is a database? A database is a place where we keep organised data. Organised means the data has a clear format, like rows and columns in a table, a clear purpose, and a clear meaning. When you look at it, you immediately understand it. You can tell this is a library's list of books, this is a clinic's appointment list, or these are an airline's flight times.",
            "image": "/courses/postgresql/introduction/04.webp",
            "caption": "Clear format, clear purpose, clear meaning."
          },
          {
            "label": "Where data comes from",
            "heading": "From raw data to Extract, Transform, Load",
            "text": "But data doesn't arrive neatly. Imagine an online shop that also has a few high street stores. The stores send their daily sales as spreadsheets, the website sends orders in its own format, and the warehouse keeps stock counts in yet another system. Put it all together, and you get raw data: mixed, messy, and full of duplicates and gaps. An ETL team takes care of this. They extract the useful part, transform it into one clean format, and load it into the database. It's a lot like a postal sorting centre. Thousands of mixed letters come in, they're sorted, and each one is delivered to the right address.",
            "image": "/courses/postgresql/introduction/05.webp",
            "caption": "The useful part is extracted, reshaped and loaded."
          },
          {
            "label": "Database vs DBMS",
            "heading": "The data vs the software",
            "text": "Let's clear up two words that people often mix up. The database is the organised data itself: the tables and the rows inside them. The database management system, or DBMS, is the software that stores that data, protects it, and answers your questions about it. Oracle, SQL Server and PostgreSQL are all database management systems. So when we say PostgreSQL, we mean the software that manages your databases.",
            "caption": "Database = the data. DBMS = the software that manages it."
          },
          {
            "label": "Two kinds of data",
            "heading": "Structured vs unstructured data",
            "text": "Data comes in two broad kinds. Structured data fits neatly into tables, with rows and columns, like customer lists, payments and bookings. Unstructured data looks more like paragraphs, documents, images and logs. Systems such as Hadoop were built to handle huge amounts of unstructured data. Oracle, Microsoft SQL Server and PostgreSQL are relational databases, and they shine with structured data.",
            "image": "/courses/postgresql/introduction/07.webp"
          },
          {
            "label": "Relational databases",
            "heading": "Tables, rows and relationships",
            "text": "Relational database management system, or RDBMS, is the formal name. Data is kept in tables. Each row is one record, like one customer, and each column is one detail, like the name or the city. Tables can be related to each other. A customers table and an orders table are linked by the customer number, so you can ask: show me every order placed by Alex. You ask those questions using a language called SQL.",
            "image": "/courses/postgresql/introduction/08.webp"
          },
          {
            "label": "Try it",
            "heading": "A simple SQL query",
            "text": "Here's what a simple SQL query looks like. In plain English: from the customers table, show me the name and city of every customer who lives in London. Notice that you only describe what you want. You don't tell the database how to find it. Working out the fastest way is the database's job, and later we'll see the part of PostgreSQL that does exactly that.",
            "code": "SELECT name, city FROM customers WHERE city = 'London';",
            "caption": "Ask for what you want; the database works out how."
          },
          {
            "label": "SQL command families",
            "heading": "DDL, DML, DCL, TCL and SELECT",
            "text": "SQL commands come in a few families. Data definition commands, like create, alter and drop, build and change the structure, such as tables. Data manipulation commands, like insert, update and delete, change the rows. Data control commands, grant and revoke, give or take away permissions. Transaction control commands, commit and rollback, confirm or cancel your changes. And select, the most used command of all, reads the data.",
            "caption": "Structure, rows, permissions, transactions, and reading."
          },
          {
            "label": "So many choices",
            "heading": "Hundreds of databases. Why another one?",
            "text": "Now, which database should hold all this data? There are a lot of choices. Oracle, Microsoft SQL Server, MySQL, MongoDB, Db2, and many more. The ranking site DB-Engines tracks more than 400 database systems. Oracle and SQL Server are already very stable, mature products. So it's a fair question: why would anyone need another database?",
            "image": "/courses/postgresql/introduction/11.webp",
            "caption": "DB-Engines tracks more than 400 systems."
          },
          {
            "label": "The problem",
            "heading": "Licences and support cost a fortune",
            "text": "The answer is cost. For years, companies running big commercial databases paid huge amounts of money, every single year, for licences and for support. For a large company, that can mean millions of dollars. Product owners and client teams were frustrated. They were paying a fortune, and they started asking a simple question: is there something just as good, but much cheaper?",
            "image": "/courses/postgresql/introduction/12.webp"
          },
          {
            "label": "The search",
            "heading": "The search for an alternative",
            "text": "So they started searching for an alternative. They tested many products over the years. Some were fast but missing features. Some were cheap but not reliable enough. Before choosing anything, they wrote down exactly what they needed. That list is important, because it explains why PostgreSQL won. Let's go through it, one item at a time.",
            "image": "/courses/postgresql/introduction/13.webp"
          },
          {
            "label": "The wish list",
            "heading": "The wish list, part one",
            "text": "Here's the first half of the wish list. The software should be free, or at least cheap. It should be relational, keeping data in tables. It should handle OLTP, meaning live, day to day transactions. And it should also handle OLAP, meaning analytics on years of history. Let's look at each one.",
            "image": "/courses/postgresql/introduction/14.webp"
          },
          {
            "label": "Wish one",
            "heading": "Free, or at least cheap",
            "text": "Wish number one: free, or at least cheap. Remember, these companies were already spending millions on licences and support. Now they wanted a database that costs nothing to download and use, or very little. That sounds like a lot to ask. Most people assume that anything free must be weaker. As we'll see, that assumption turned out to be wrong.",
            "caption": "No more millions on licences."
          },
          {
            "label": "Wish three: OLTP",
            "heading": "Live transactions: OLTP",
            "text": "Wish number two, relational, we've already seen. Wish number three is support for OLTP, which stands for online transaction processing. These are the live transactions that happen every second. Paying for groceries with a card. Ordering a taxi from an app. Buying a concert ticket online. Each one is small and quick, but there are thousands of them at the same time, and every single one must be correct. If two people try to buy the very last concert ticket, only one of them can get it.",
            "image": "/courses/postgresql/introduction/16.webp"
          },
          {
            "label": "Wish four: OLAP",
            "heading": "Analytics on history: OLAP",
            "text": "Wish number four is OLAP, which stands for online analytical processing. Imagine a supermarket chain with years of sales data. Management wants to know: which products sell more in winter? Which stores are growing? What should we stock up on before the holidays? So someone runs big queries across all that history, and builds a dashboard showing sales by month and by store. Reading history to answer questions like these is called analytics, and the database must handle that too.",
            "image": "/courses/postgresql/introduction/17.webp"
          },
          {
            "label": "Two different jobs",
            "heading": "OLTP and OLAP: both jobs",
            "text": "So the same database should be good at two very different jobs. OLTP means many small, fast transactions that change data, like a payment. OLAP means fewer, but much bigger, queries that read lots of data, like a yearly sales report. Many databases are good at one of these. The companies wanted one that could do both.",
            "image": "/courses/postgresql/introduction/18.webp"
          },
          {
            "label": "All or nothing",
            "heading": "Every transaction is all or nothing",
            "text": "Transactions also need a promise called ACID. Take a bank transfer of $1,000 from Alex to Maria. Two things happen: Alex's balance goes down, and Maria's goes up. Atomic means both happen, or neither does. Consistent means the rules are never broken. Isolated means other people never see a half finished transfer. And durable means once it's confirmed, it stays saved, even if the power goes out a second later. PostgreSQL gives you all four.",
            "image": "/courses/postgresql/introduction/19.webp"
          },
          {
            "label": "The wish list",
            "heading": "The wish list, part two",
            "text": "Now the second half of the wish list. It must be secure. It must offer high availability. It must support disaster recovery. It must allow point in time recovery. And if something goes wrong, someone must be there to help, with support, and even a licence when needed. Again, let's take them one by one.",
            "image": "/courses/postgresql/introduction/20.webp"
          },
          {
            "label": "Security",
            "heading": "Security, even when it's free",
            "text": "First, security. When something is free, people naturally get suspicious. Is my data safe? Can anyone read it? So the expectation was high level security, even from free software. That means users and passwords, roles and permissions to control who can see what, rules about which computers may connect, and encryption for data travelling over the network.",
            "image": "/courses/postgresql/introduction/21.webp"
          },
          {
            "label": "Who may log in",
            "heading": "The first gate: pg_hba.conf",
            "text": "In PostgreSQL, the first security gate is a small configuration file called pg_hba.conf. It decides who may connect, to which database, from which computer, and how they must prove who they are. For example, you can allow the application server to connect with a strong, SCRAM-encrypted password, and refuse everyone else. We'll explore this file properly in the architecture videos.",
            "caption": "Who, to which database, from where, and how."
          },
          {
            "label": "High availability",
            "heading": "Two pilots, one plane",
            "text": "Next, high availability. Let's understand it with an everyday example. A passenger plane always has two pilots: a captain and a co-pilot. Both are fully trained to fly the plane, and the co-pilot follows everything that's happening during the flight. If the captain suddenly falls ill, the co-pilot takes over, and the passengers still land safely. Nobody would want to board a plane that depended on just one person.",
            "image": "/courses/postgresql/introduction/23.webp"
          },
          {
            "label": "High availability",
            "heading": "The standby takes over",
            "text": "Databases work the same way. The main server, often called the primary, or master, handles the work. A standby server keeps an up to date copy of the data. If the main server goes down, the standby takes over its role, and users keep working. That is high availability. The system stays available, even when one server fails.",
            "image": "/courses/postgresql/introduction/24.webp"
          },
          {
            "label": "Replication",
            "heading": "The standby replays every change",
            "text": "How does the standby stay up to date? Through replication. Every change on the main server is first written to the write ahead log. PostgreSQL streams those log records to the standby, which replays them, so its copy stays just a moment behind. In synchronous mode, the main server waits until the standby confirms each commit, so a confirmed transaction is not lost. In asynchronous mode, it doesn't wait, which is faster, but the last few changes could be lost in a crash.",
            "image": "/courses/postgresql/introduction/25.webp"
          },
          {
            "label": "Seen it in an app?",
            "heading": "Please try again, and it works",
            "text": "You may have seen this with an app on your phone. You tap pay, and it says: something went wrong, please try again. A minute later, you try again, and it works. Sometimes, behind the scenes, the main database server failed, and the standby was promoted to take its place. You just waited a moment, and carried on.",
            "image": "/courses/postgresql/introduction/26.webp"
          },
          {
            "label": "Disaster recovery",
            "heading": "Disaster recovery: survive a big loss",
            "text": "Next, disaster recovery. High availability covers one server failing, like the captain falling ill. Disaster recovery covers something much bigger: losing a whole site. For a database, that means an entire data centre going offline, because of a fire, a flood or a long power cut. A copy of the database, usually in another region, must be ready to take over all the data and all the transactions.",
            "image": "/courses/postgresql/introduction/27.webp"
          },
          {
            "label": "Point in time recovery",
            "heading": "One update, no where clause",
            "text": "Next, point in time recovery, one of the most important ideas for a database administrator. Say an online shop takes a full backup every night at midnight. The next day, customers place orders all morning. Then, at 2:15 in the afternoon, someone runs an update without a where clause, and every product's price is set to zero. If you restore last night's backup, the prices come back, but every order placed since midnight is lost.",
            "image": "/courses/postgresql/introduction/28.webp"
          },
          {
            "label": "Point in time recovery",
            "heading": "Recover to one minute before the mistake",
            "text": "So do you have to choose between wrong prices and lost orders? Not if the database supports point in time recovery. The database keeps a record of every change, in files called write ahead logs. You restore the midnight backup, then replay those saved changes, in order, until 2:14, one minute before the mistake. The morning's orders are back, the prices are right, and only the bad update is gone. Backups alone are not enough. Backups plus saved changes are what save you.",
            "caption": "Backup + saved changes, replayed in order."
          },
          {
            "label": "Two kinds of backup",
            "heading": "Logical and physical backups",
            "text": "PostgreSQL offers two kinds of backup. A logical backup, made with pg_dump, saves the SQL needed to rebuild one database. It's portable, and great for moving data between servers or versions. A physical backup, made with pg_basebackup, copies the database files of the whole server. Only physical backups, together with the write ahead logs, give you point in time recovery.",
            "caption": "pg_dump for one database. pg_basebackup for the whole server."
          },
          {
            "label": "Support",
            "heading": "Someone to call for help",
            "text": "And the last wish: support. Even the best database administrators sometimes get stuck on a problem they can't fix alone. So the companies wanted someone to call for help, at a reasonable price. Some also wanted a proper product licence: a company that signs a contract and says, we stand behind this product.",
            "image": "/courses/postgresql/introduction/31.webp"
          },
          {
            "label": "The answer",
            "heading": "PostgreSQL ticks every box",
            "text": "That's quite a wish list. A database that's free, relational, good at transactions and analytics, secure, highly available, with disaster recovery, point in time recovery and support. They were paying millions, and still not getting all of this. Now they wanted it for free! And after a long search, they found one product that matched exactly: PostgreSQL.",
            "image": "/courses/postgresql/introduction/32.webp"
          },
          {
            "label": "Trust takes time",
            "heading": "Trust takes years of testing",
            "text": "But a database doesn't become trusted overnight. Think of a new car model. Before it goes on sale, it goes through crash tests and safety checks, and then years of real driving. Databases earn trust in a similar way. The SQL language itself is an official standard, set by ANSI, the American National Standards Institute, and by ISO. PostgreSQL follows that standard very closely, and it has been tested in real systems for decades.",
            "image": "/courses/postgresql/introduction/33.webp"
          },
          {
            "label": "History",
            "heading": "It starts with Ingres, at Berkeley",
            "text": "So where did PostgreSQL come from? The story starts in the 1970s, at the University of California, Berkeley. A team led by Professor Michael Stonebraker built a relational database called Ingres. It was one of the early relational databases, and several commercial products later grew out of it.",
            "image": "/courses/postgresql/introduction/34.webp"
          },
          {
            "label": "History",
            "heading": "POSTGRES: the one after Ingres",
            "text": "In 1986, Stonebraker started a new project, to go beyond Ingres. He called it POSTGRES, meaning post Ingres: the one that comes after Ingres. The first demo system ran in 1987, and was shown at a conference in 1988. Version one was released to a few outside users in June 1989.",
            "image": "/courses/postgresql/introduction/35.webp"
          },
          {
            "label": "History",
            "heading": "Funded by research grants",
            "text": "The project was funded with research money: from DARPA, the Defense Advanced Research Projects Agency, from the Army Research Office, from the National Science Foundation, and from a company called ESL. Version two came in 1990, and version three in 1991. By the early 1990s, so many people were using it that support took up too much time, and the Berkeley project officially ended with version 4.2.",
            "image": "/courses/postgresql/introduction/36.webp"
          },
          {
            "label": "History",
            "heading": "From Postgres95 to PostgreSQL",
            "text": "But the code didn't die. In 1994, two students, Andrew Yu and Jolly Chen, added the SQL language to it. They released it on the internet as open source, under the name Postgres95. By 1996, that name clearly wouldn't age well, so it was renamed PostgreSQL. The version numbers carried on, so the first release under the new name was version 6.0.",
            "image": "/courses/postgresql/introduction/37.webp"
          },
          {
            "label": "A small tip",
            "heading": "Two names, one database",
            "text": "Here's a small tip. You'll hear two names: PostgreSQL, and Postgres. Both mean the same database. The longer name reminds everyone that it speaks SQL. The shorter name is just easier to say. Many people use both, and so does the project's own documentation.",
            "caption": "PostgreSQL and Postgres mean the same thing."
          },
          {
            "label": "Why an elephant?",
            "heading": "Why an elephant?",
            "text": "You've probably seen the PostgreSQL logo: a blue elephant. The community even gave it a name, Slonik, which means little elephant in Russian. Why an elephant? Elephants are strong, dependable, and famous for never forgetting. That's exactly what you want from a database that looks after your data. So whenever you see that elephant, think: strong, reliable, and never loses what you trust it with.",
            "caption": "Strong, dependable, and never forgets."
          },
          {
            "label": "The licence",
            "heading": "Free to use, change and share",
            "text": "Now, an important point. PostgreSQL is released under its own open source licence, called the PostgreSQL Licence. It's one of the most generous licences around. Anyone can download it, use it, change it, and even build commercial products on top of it, without paying anything, and without having to share their changes. That freedom is a big reason companies feel safe choosing it.",
            "image": "/courses/postgresql/introduction/40.webp"
          },
          {
            "label": "Free, but not zero cost",
            "heading": "Free licence, not zero cost",
            "text": "One small but honest point. Free licence doesn't mean zero cost. You still pay for servers or cloud machines, for storage, and for skilled people to run the database well. And you may choose to pay a company for support. The big saving is the licence itself, which for commercial databases is often the largest bill of all.",
            "caption": "You still pay for servers, people and optional support."
          },
          {
            "label": "The community",
            "heading": "Built by a worldwide community",
            "text": "So who builds it? Not a single company. A worldwide group of volunteers and company engineers, called the PostgreSQL Global Development Group. Everything lives on the community website, postgresql.org. There you'll find free downloads, the complete documentation, release notes and mailing lists. The documentation is excellent, and as a database administrator, you'll be reading it a lot.",
            "image": "/courses/postgresql/introduction/42.webp"
          },
          {
            "label": "How a version is made",
            "heading": "Propose, review, test, release",
            "text": "How does a new version come together? Anyone can propose a change on the developer mailing lists. Proposed patches are reviewed in rounds called commitfests, where experienced developers test and improve them. Only a small group of committers can add code to the main project. Then, in the spring or summer, a beta version is released for testing, and the final version usually arrives in the autumn.",
            "caption": "Mailing lists, commitfests, betas, then an autumn release."
          },
          {
            "label": "The early years",
            "heading": "Free, but nobody trusted it",
            "text": "But here's the twist. Even though it was free, for many years almost nobody used it for serious business. Why? Because data is precious. A company's data can be worth millions. To hand that data to a free product that came out of a university project, you need a lot of confidence and belief. Most companies simply didn't have that trust yet. Still, the developers never lost hope. They kept improving it, release after release.",
            "caption": "Data is precious. Trust had to be earned."
          },
          {
            "label": "Taking a chance",
            "heading": "A small trial: the proof of concept",
            "text": "Then a few brave companies took a calculated risk. They started small, often with a less critical system, like an internal reporting tool. If PostgreSQL worked well, they would save a lot of money. If it didn't, they could simply stay with their existing database. So they tested it with real work. And many of those tests went very well.",
            "image": "/courses/postgresql/introduction/45.webp"
          },
          {
            "label": "Word of mouth",
            "heading": "Word of mouth, then strong growth",
            "text": "Then word of mouth did the rest. Engineers shared their results at conferences and online: it works, it's reliable, and the licence is free. Other teams tried it, and liked it too. By the late 2000s, many companies were tired of rising licence costs and were looking for alternatives. Through the 2010s, PostgreSQL's popularity grew strongly, year after year.",
            "image": "/courses/postgresql/introduction/46.webp"
          },
          {
            "label": "Releases",
            "heading": "A new major version every year",
            "text": "One reason for that trust is the steady release cycle. The PostgreSQL community releases a new major version about once a year, usually in the autumn, with new features. In between, minor releases come out at least once every three months, with bug fixes and security fixes. Each major version is supported for five years. After that, it reaches end of life, and you should upgrade.",
            "image": "/courses/postgresql/introduction/47.webp"
          },
          {
            "label": "Version numbers",
            "heading": "Major version, minor release",
            "text": "Let's read a version number. Take 18.7. 18 is the major version, with new features. Moving from one major version to another is an upgrade, done with a tool like pg_upgrade, or with a dump and restore. 7 is the minor release, with fixes only. Applying a minor release is simple: stop the server, install the new binaries, and start it again. In PostgreSQL, minor releases are how patches are delivered.",
            "image": "/courses/postgresql/introduction/48.webp"
          },
          {
            "label": "Right now",
            "heading": "PostgreSQL 19 is the newest",
            "text": "Right now, as we write this, PostgreSQL 19 is the newest version. It was released this month, in November 2026. Version 14 received its final update this month too, so it has reached the end of its life, and is no longer supported. If you're starting a new project today, choose a recent version, and plan your upgrades ahead.",
            "image": "/courses/postgresql/introduction/49.webp",
            "caption": "From postgresql.org, November 2026."
          },
          {
            "label": "Dedication",
            "heading": "Decades of steady improvement",
            "text": "Think about the dedication behind this. Version 1 came out in 1989. Since then, the community has delivered hundreds of releases, major and minor, fixing bugs, closing security holes and adding new features, year after year, for more than three decades. That consistency is a big part of why PostgreSQL is where it is today.",
            "caption": "Version 1 in 1989. Version 19 in 2026."
          },
          {
            "label": "Recognition",
            "heading": "DBMS of the Year, four times",
            "text": "And the industry noticed. The ranking site DB-Engines picks a database of the year, for the system that gained the most popularity during that year. PostgreSQL won it in 2017, 2018, 2020 and 2023. That's four times.",
            "image": "/courses/postgresql/introduction/51.webp"
          },
          {
            "label": "Size vs growth",
            "heading": "Big vs fast-growing",
            "text": "Here's a simple way to think about it. Picture two coffee shops on the same street. One is big and well known, but every year a few regulars stop coming. The other is small and new, but every year more people discover it. The big one still has more customers, but the small one is growing faster. That's the story of PostgreSQL over the last decade. It's not always the biggest, but it's one of the fastest growing.",
            "image": "/courses/postgresql/introduction/52.webp",
            "caption": "An illustration, not real numbers."
          },
          {
            "label": "Support",
            "heading": "Free software. Who helps?",
            "text": "Now, let's come back to that last wish: support. Once companies started using PostgreSQL, a new doubt came up. It's free software. If something goes badly wrong, and my own database team can't fix it, who will help me? That one question created a whole new business.",
            "image": "/courses/postgresql/introduction/53.webp"
          },
          {
            "label": "Support companies",
            "heading": "Paid support, at a fair price",
            "text": "Many companies started offering PostgreSQL support and consulting, at a reasonable price. Some names you may hear: 2ndQuadrant, which later joined EDB. OpenSCG, whose team joined Amazon Web Services. Fujitsu, Cybertec, Percona, dbi services, and many others around the world. Just like hiring a consultant, you pay for help when you need it, at far lower cost than a commercial database licence.",
            "image": "/courses/postgresql/introduction/54.webp"
          },
          {
            "label": "The big question",
            "heading": "Big companies want someone responsible",
            "text": "Then came a tougher question, often from large, regulated organisations, like insurers, telecom companies and government agencies. Can we really run our most critical systems on PostgreSQL? Technically, yes, absolutely, and many do. But these organisations also want someone who takes responsibility. If the product has a bug, they want a company that says: we are responsible, and we will deliver a fix. The open source community can't sign that kind of contract, because nobody owns the product.",
            "image": "/courses/postgresql/introduction/55.webp"
          },
          {
            "label": "EDB",
            "heading": "EDB: a company behind PostgreSQL",
            "text": "That's the gap that EDB, short for Enterprise DB, filled. EDB is a company built around PostgreSQL. It sells subscriptions with a product licence and round the clock support, plus its own edition, called EDB Postgres Advanced Server. EDB is also one of the biggest contributors to community PostgreSQL, and many of its engineers work on the open source project itself.",
            "image": "/courses/postgresql/introduction/56.webp"
          },
          {
            "label": "Open source vs EDB",
            "heading": "Same heart, different extras",
            "text": "So how is EDB's edition different? Underneath, it's built on PostgreSQL, so the core engine is the same. On top, EDB adds features that make it more compatible with Oracle, such as Oracle style packages and functions, which makes moving from Oracle easier. And it adds tools that make everyday work more user friendly. Let's look at those tools.",
            "caption": "EDB adds Oracle compatibility, tools and support."
          },
          {
            "label": "EDB tools",
            "heading": "EDB tools and free alternatives",
            "text": "EDB offers three well known tools. EFM, the EDB Failover Manager, for high availability. PEM, the Postgres Enterprise Manager, for monitoring and management, a lot like Oracle Enterprise Manager. And backup tools, for fast backups and recovery. The good news is that the open source world has free alternatives for each one. pg_auto_failover, or Patroni, for failover. Nagios, or pgAdmin, for monitoring. And pgBackRest, or Barman, for backups.",
            "image": "/courses/postgresql/introduction/58.webp"
          },
          {
            "label": "Automatic failover",
            "heading": "3 a.m. crash? Automatic failover",
            "text": "Why does automatic failover matter? Suppose the main server crashes at three in the morning, on a Sunday, in the middle of a holiday weekend. Without automation, someone's phone has to wake them up, they have to log in, and promote the standby by hand. Meanwhile, the business is down. With a failover manager, the tool notices the failure and promotes the standby automatically. That's the idea behind EFM, and behind pg_auto_failover in the open source world.",
            "image": "/courses/postgresql/introduction/59.webp"
          },
          {
            "label": "Backups",
            "heading": "Full vs incremental backups",
            "text": "Now, backups. A full backup copies everything, every time. An incremental backup copies only what changed since the last backup, so it's much faster and smaller. For a long time, PostgreSQL itself didn't offer incremental backups, so people used tools like EDB's backup tool, or pgBackRest. Since PostgreSQL 17, the built in pg_basebackup command can take incremental backups too.",
            "image": "/courses/postgresql/introduction/60.webp"
          },
          {
            "label": "Moving from Oracle",
            "heading": "Moving from Oracle to PostgreSQL",
            "text": "EDB also helps with migration from Oracle. Because EDB's edition understands many Oracle features, more of an Oracle database moves over automatically. With community PostgreSQL, tools like ora2pg convert most of the tables, data and code for you, and the rest, often complex PL/SQL packages, has to be rewritten by hand. Either way, plan plenty of time for testing.",
            "image": "/courses/postgresql/introduction/61.webp"
          },
          {
            "label": "Your choice",
            "heading": "Community or EDB? It depends",
            "text": "So which should you choose? If your goal is to save cost, community PostgreSQL, plus free tools, plus a support company when needed, is a very strong choice. If you want one vendor to take full responsibility, need maximum Oracle compatibility, and have the budget, EDB is a good option. Nobody will stop you either way. Just remember: you're not getting a different database. You're getting extras around the same one.",
            "image": "/courses/postgresql/introduction/62.webp"
          },
          {
            "label": "Today",
            "heading": "From doubt to banks and clouds",
            "text": "And that's how PostgreSQL came into the market. It started as a university project, survived years of doubt, and slowly earned trust through word of mouth. Today, banks run on it, and every major cloud, including Amazon, Microsoft and Google, offers PostgreSQL as a managed service. It has become a safe, mainstream choice.",
            "caption": "Banks, telecom, government, startups and every major cloud."
          },
          {
            "label": "PostgreSQL in the cloud",
            "heading": "Managed PostgreSQL in the cloud",
            "text": "In the cloud, you'll often use PostgreSQL as a managed service: Amazon RDS and Aurora, Azure Database for PostgreSQL, or Google Cloud SQL. The cloud provider takes care of the machines, automatic backups, minor patches and standby servers. Does that mean database administrators aren't needed? Not at all. Someone still has to design the database, secure it, tune slow queries, plan upgrades and control costs.",
            "caption": "The cloud runs the machines. A DBA still runs the database."
          },
          {
            "label": "Extensions",
            "heading": "Add new powers with extensions",
            "text": "Another reason for PostgreSQL's popularity is that it can be extended. Extensions add new abilities without changing the core. PostGIS turns PostgreSQL into a powerful map and location database. pg_stat_statements records statistics for every query, which database administrators love for tuning. And there are extensions for scheduling jobs, connecting to other databases, and much more. It's like adding apps to a phone.",
            "image": "/courses/postgresql/introduction/65.webp"
          },
          {
            "label": "Interview tip",
            "heading": "\"Tell us about PostgreSQL\"",
            "text": "A quick interview tip. History questions aren't asked often, but sometimes an interviewer will say: tell us what you know about PostgreSQL. That's your chance. Say that it's a free, open source relational database, born at Berkeley, renamed PostgreSQL in 1996, with yearly major releases and quarterly minor releases, community and EDB editions, and strong features for high availability, replication and point in time recovery.",
            "image": "/courses/postgresql/introduction/66.webp"
          },
          {
            "label": "Coming from Oracle?",
            "heading": "Oracle ideas, PostgreSQL names",
            "text": "If you already know Oracle, here's a quick map to help you. Oracle's redo logs are like PostgreSQL's write ahead log. Data Guard is like streaming replication. RMAN backups are like pg_basebackup, or pgBackRest. Oracle's SQL*Plus is like PSQL. And Oracle Enterprise Manager is like PEM, or pgAdmin. The ideas are familiar. Mostly, the names change.",
            "image": "/courses/postgresql/introduction/67.webp"
          },
          {
            "label": "Next up",
            "heading": "Into the architecture",
            "text": "Now let's move on to the heart of any database: its architecture. If you understand the architecture well, you'll understand almost everything else in PostgreSQL. You'll know what to do, when to do it, how to do it, and why things happen the way they do. So let's start gently."
          },
          {
            "label": "Architecture",
            "heading": "Query in, result set out",
            "text": "What does architecture mean? In general, it's the complete back end flow of a task, from its starting point until it's done. For a database, it's the complete back end flow from the moment you start running a query, until you get the result set back on your screen. Everything that happens in between, that's the architecture.",
            "image": "/courses/postgresql/introduction/69.webp"
          },
          {
            "label": "Why it matters",
            "heading": "Know where it fails, and why",
            "text": "For a developer, knowing the database architecture is nice, but not required. For a database administrator, it's mandatory. Here's why. Say the application suddenly can't connect, and the log says: sorry, too many clients already. You need to know exactly where in the flow it failed, and why. Without that knowledge, you might just restart the server, and hope. It may even work, for a while.",
            "image": "/courses/postgresql/introduction/70.webp"
          },
          {
            "label": "Root cause",
            "heading": "Restart and hope is not a plan",
            "text": "But then the problem comes back the next week. And after any serious outage, the team writes an incident review: what happened, why it happened, how it was fixed, and how we stop it happening again. Restart and hope is not an answer you can write down. Knowing the architecture lets you explain the root cause, fix it properly, and prevent it.",
            "caption": "Explain the cause, the fix and the prevention."
          },
          {
            "label": "An everyday example",
            "heading": "The driver vs the mechanic",
            "text": "Here's an everyday example. Think of a car. As a driver, you start it, drive, and park. You don't need to know how the engine works. But a mechanic must know everything: the engine, the fuel system, the brakes, the electrics, and what every warning light means. A developer is like the driver. A database administrator is like the mechanic.",
            "image": "/courses/postgresql/introduction/72.webp"
          },
          {
            "label": "Main parts",
            "heading": "Processes, memory and storage",
            "text": "There's no single official way to divide PostgreSQL's architecture, but most DBAs learn it in three main parts. First, the processes: the postmaster, one backend process for each connection, and background processes like the checkpointer and the WAL writer. Second, the memory: shared memory, such as shared buffers, plus private working memory for each process. And third, the storage: the data directory on disk, with the data files and the write ahead log. Running through all three is the path of a query. Let's take our first steps.",
            "image": "/courses/postgresql/introduction/73.webp"
          },
          {
            "label": "One key word",
            "heading": "In the OS, a worker is a process",
            "text": "Before we start, one word you'll hear all the time: process. In an operating system, a worker, something that does a job, is called a process. A thread is a smaller piece inside a process. PostgreSQL is built from processes. Different processes do different jobs, like listening for connections, serving users, or writing data to disk. Keep that word in mind.",
            "image": "/courses/postgresql/introduction/74.webp"
          },
          {
            "label": "End users",
            "heading": "Who are the end users?",
            "text": "The database server runs somewhere, on a machine with its own IP address. The people who use it are called end users. Who are they? Product users, like you, buying something in a shopping app. Developers, who run queries while changing the code. Sometimes database administrators themselves. And application teams, who run application servers and services, written in Java, Python or Node.",
            "image": "/courses/postgresql/introduction/75.webp"
          },
          {
            "label": "Interfaces",
            "heading": "Every user needs an interface",
            "text": "End users never touch the database files directly. Think about getting cash. You don't walk into the bank's vault. You use a cash machine, the bank's app, or the counter. Each one is an interface to your account. Databases are the same. To run a query, every end user needs a client interface that connects to the database server.",
            "image": "/courses/postgresql/introduction/76.webp"
          },
          {
            "label": "Client and server",
            "heading": "The client server model",
            "text": "This is called the client server model. The server is the PostgreSQL program that manages the database files, accepts connections and does the actual work. The client is any program that wants to use the database, like PSQL, pgAdmin, or your banking application. They can run on the same machine, or on different machines far apart, talking to each other over the network.",
            "caption": "Clients ask. The server does the work."
          },
          {
            "label": "Client interfaces",
            "heading": "Three kinds of client interfaces",
            "text": "There are three main kinds of client interfaces. A graphical tool, like pgAdmin, with windows and buttons. A command line tool, like PSQL, where you type commands. And application servers, which run the company's applications and connect on behalf of thousands of users. Whichever you use, the connection arrives at the database server, which by default listens on port 5432.",
            "image": "/courses/postgresql/introduction/78.webp"
          },
          {
            "label": "A preview",
            "heading": "Preview: the journey of a query",
            "text": "Here's a quick preview of what happens next. A process called the postmaster receives your connection, and starts a dedicated backend process just for you. That process checks the rules from pg_hba.conf, to see if your user and your computer are allowed in. Then it parses your query, the planner picks the cheapest plan, the executor runs it, and the result comes back to you. We'll go through each step in detail in the next video.",
            "image": "/courses/postgresql/introduction/79.webp"
          },
          {
            "label": "The job",
            "heading": "What a PostgreSQL DBA does",
            "text": "As a PostgreSQL database administrator, all of this becomes your daily work. Installing and configuring the database. Securing users and access. Taking backups, and restoring them. Setting up replication and failover. Upgrading and patching. And tuning and monitoring for performance, on your own servers or in the cloud. It's a skill set that's in high demand.",
            "image": "/courses/postgresql/introduction/80.webp"
          },
          {
            "label": "How to start",
            "heading": "Practise, break things, fix them",
            "text": "So how do you start learning? Install PostgreSQL on a Linux virtual machine, or even on your laptop. Connect with PSQL, create a database, a few tables and some users, and practise every day. Break things on purpose, and fix them. Take a backup, drop a table, and recover it. And keep the official documentation open. Hands on practice is what turns these ideas into real skill.",
            "caption": "A Linux VM, psql and the official docs are all you need."
          },
          {
            "label": "Recap",
            "heading": "Let's recap",
            "text": "Let's recap. Companies wanted a free, relational database for transactions and analytics, with security, high availability, disaster recovery, point in time recovery and support. PostgreSQL matched every point. It grew from Berkeley's POSTGRES project, became PostgreSQL in 1996, earned trust through word of mouth, and today has both community and EDB editions. And its architecture starts with users, interfaces and processes.",
            "image": "/courses/postgresql/introduction/82.webp"
          }
        ]
      },
      {
        "n": 2,
        "slug": "architecture",
        "youtubeId": "QuKyur7WHF0",
        "uploaded": "2026-11-24T05:11:37Z",
        "seconds": 1231,
        "title": "PostgreSQL Architecture: What Happens When You Run a Query",
        "description": "What really happens when you connect to PostgreSQL and run a query: ports and client tools, the postmaster and backend processes, pg_hba.conf, the five steps of a query, EXPLAIN and statistics, and postgresql.conf.",
        "chapters": [
          [
            "0:00",
            "Welcome and today's plan"
          ],
          [
            "0:46",
            "What architecture means"
          ],
          [
            "1:25",
            "Three parts, and the hotel picture"
          ],
          [
            "2:17",
            "The server: IP address and port 5432"
          ],
          [
            "3:19",
            "End users and client interfaces"
          ],
          [
            "4:04",
            "Connecting with psql"
          ],
          [
            "5:11",
            "The postmaster and backend processes"
          ],
          [
            "6:27",
            "pg_hba.conf: who may connect"
          ],
          [
            "8:39",
            "Can't connect? A four-step checklist"
          ],
          [
            "9:26",
            "The path of a query"
          ],
          [
            "10:14",
            "Step 1: the parser"
          ],
          [
            "10:56",
            "Step 2: the analyzer"
          ],
          [
            "11:19",
            "Step 3: the rewriter"
          ],
          [
            "11:43",
            "Step 4: the planner and EXPLAIN"
          ],
          [
            "12:40",
            "Statistics, and why queries suddenly slow down"
          ],
          [
            "13:52",
            "Step 5: the executor"
          ],
          [
            "14:14",
            "Permissions"
          ],
          [
            "15:16",
            "Myth: the result cache"
          ],
          [
            "15:44",
            "postgresql.conf and ALTER SYSTEM"
          ],
          [
            "16:30",
            "Reload or restart?"
          ],
          [
            "17:44",
            "The data directory"
          ],
          [
            "18:12",
            "The whole journey"
          ],
          [
            "18:37",
            "Coming from Oracle?"
          ],
          [
            "19:09",
            "Interview questions"
          ],
          [
            "19:36",
            "Recap"
          ]
        ],
        "sections": [
          {
            "label": "Welcome back",
            "heading": "What happens when you run a query?",
            "text": "Hi, hello everyone, and welcome back to our PostgreSQL series. In the last video, we saw what PostgreSQL is, why so many companies chose it, where it came from, and who supports it. Today, we'll look at the general architecture of PostgreSQL. In simple words: what really happens, step by step, from the moment you connect and run a query, until the result comes back to your screen."
          },
          {
            "label": "Today's plan",
            "heading": "Six stops on today's journey",
            "text": "Here's our plan. First, the big picture: what architecture means, and why a database administrator must know it. Then, how a client connects: IP addresses, ports and client tools. Next, the gatekeeper: a process called the postmaster, and a file called pg_hba.conf. After that, the steps every query goes through. Then the main settings file, postgresql.conf. And finally, a recap, with some interview questions.",
            "image": "/courses/postgresql/architecture/02.webp"
          },
          {
            "label": "The big picture",
            "heading": "Architecture = the end-to-end flow",
            "text": "So what do we mean by architecture? For a database administrator, architecture means the complete end to end flow. Someone does something with the database, maybe a simple select, maybe a big update. The architecture is everything that happens in the background, from the very first moment of that request, until the work is finished and the answer is sent back.",
            "caption": "From the first click to the last row of the result."
          },
          {
            "label": "Why it matters",
            "heading": "Know the flow, find the failure point",
            "text": "Why does this matter? Because every problem happens at a specific step. A user can't log in. A query is suddenly slow. An application gets an error at two in the morning. If you know the flow, you can ask the right question: did it fail while connecting, while checking permissions, while planning, or while reading the data? Knowing the step is half of the fix.",
            "caption": "Every error comes from one specific step."
          },
          {
            "label": "Three parts",
            "heading": "Today: the general flow",
            "text": "In this series, we'll study the architecture in three parts. Today, the general flow: how a connection is made, and how a query travels through PostgreSQL. In the next video, memory: how PostgreSQL uses memory, like shared buffers. And after that, the processes that run in the background. Underneath all three is storage, the data directory on disk. This split is a teaching choice, not an official one, but it makes a big topic much easier to learn.",
            "image": "/courses/postgresql/architecture/05.webp"
          },
          {
            "label": "An everyday picture",
            "heading": "Think of a hotel",
            "text": "Let's use an everyday picture to hold it all together. Think of a hotel. You arrive at the front door, and the reception desk greets you. Reception checks the guest list: are you booked, and can you prove who you are? If yes, the hotel gives you a personal butler, who looks after every request you make during your stay. And the whole hotel follows a book of house rules. Keep this hotel in mind. Every part of it has a real name in PostgreSQL, and we'll meet them one by one.",
            "image": "/courses/postgresql/architecture/06.webp"
          },
          {
            "label": "The server",
            "heading": "An address, and a door",
            "text": "First, the hotel building itself: the database server. It's a machine somewhere, maybe in a data centre, maybe in the cloud, and it has an IP address, for example 10.20.30.40. Every program that accepts connections also listens on a port, a numbered door. PostgreSQL's default port is 5432. For comparison, Oracle's listener usually uses 1521, and MySQL uses 3306. You can change the port, but 5432 is what you'll see almost everywhere.",
            "image": "/courses/postgresql/architecture/07.webp"
          },
          {
            "label": "A common surprise",
            "heading": "By default, PostgreSQL only listens on localhost",
            "text": "Here's a detail that surprises many beginners. After a fresh install, PostgreSQL usually listens only on localhost, which means only programs on the same machine can connect. If your application runs on another server, you must change a setting called listen_addresses, and restart PostgreSQL. Until then, remote connections are refused before PostgreSQL even looks at who you are. Remember this. It's one of the most common reasons for the question: why can't I connect?",
            "caption": "Set listen_addresses, then restart, to accept remote connections."
          },
          {
            "label": "End users",
            "heading": "Everyone who sends work to the database",
            "text": "Now, who are the guests? We call them end users. Imagine a food delivery app. The customers ordering dinner are product users. The developers building new features are end users too. So are the database administrators looking after the database, and the application teams who run the app servers. Anyone who sends work to the database is an end user.",
            "image": "/courses/postgresql/architecture/09.webp"
          },
          {
            "label": "Client interfaces",
            "heading": "Nobody walks in without an interface",
            "text": "No end user touches the database files directly. Everyone goes through a client interface. There are three main kinds. Graphical tools, like pgAdmin or DBeaver, with windows and buttons. The command line tool, PSQL, where you type your commands. And applications, written in Java, Python, Node or other languages, which connect through a database driver. Different doors in, but every connection ends up at the same PostgreSQL server.",
            "image": "/courses/postgresql/architecture/10.webp"
          },
          {
            "label": "Try it",
            "heading": "Connecting with psql",
            "text": "Here's what a connection looks like with PSQL. -h gives the host, 10.20.30.40. -p gives the port, 5432. Dash capital U gives the user, Maria. And -d gives the database, shop. pgAdmin and application drivers ask for exactly the same four things, just in a different form.",
            "code": "psql -h 10.20.30.40 -p 5432 -U maria -d shop",
            "caption": "Host, port, user and database: the four basics."
          },
          {
            "label": "The request",
            "heading": "What a connection request carries",
            "text": "So every connection request carries a few key facts. Who is connecting: the user, Maria. Which database she wants: shop. Where she's coming from: her computer's IP address, called the client IP, here 10.20.30.50. And where she's going: the server's address and port. Plus, usually, proof of identity, like a password. PostgreSQL uses these facts to decide whether to let her in.",
            "image": "/courses/postgresql/architecture/12.webp"
          },
          {
            "label": "Client IP",
            "heading": "Through an app server, many users share one client IP",
            "text": "One small but important point about the client IP. When Maria connects from her own laptop, the client IP is her laptop's address. But when thousands of customers use the food delivery app, they don't connect to the database themselves. The application server connects for all of them. So the database sees just one client IP, the app server's, often with one shared database user. Keep that in mind when you read connection logs.",
            "caption": "The app server connects for all of them."
          },
          {
            "label": "The postmaster",
            "heading": "One backend process per connection",
            "text": "Now the request reaches the server. Waiting at the door is the reception desk of our hotel: a process called the postmaster. It's the first PostgreSQL process that starts, and it listens on the port for new connections. When a connection request arrives, the postmaster starts a brand new process, just for that connection, called a backend process. Maria gets one backend. Leo gets another. The app server gets one for each of its connections. This is called the process per user model.",
            "image": "/courses/postgresql/architecture/14.webp"
          },
          {
            "label": "Your personal butler",
            "heading": "The backend handles everything for your session",
            "text": "That backend process is your personal butler. From now on, it does everything for your session. It checks who you are, it reads your queries, plans them, runs them, and sends the results back. The postmaster goes straight back to the door, waiting for the next guest. One small correction to something you may read online: it's the new backend process, not the postmaster itself, that checks the guest list. The postmaster just opens the door and hands you over.",
            "caption": "Authentication, parsing, planning and running your queries."
          },
          {
            "label": "Try it",
            "heading": "Seeing backends on Linux",
            "text": "You can actually see these backend processes on a Linux server. Run ps, and look for postgres. Each backend shows up as its own line, with the user name, the database, the client IP and port, and what it's doing right now. Here, Maria is connected to the shop database from 10.20.30.50, and she's idle, waiting to type her next query. For a database administrator, this is a very handy view.",
            "code": "postgres: maria shop 10.20.30.50(52344) idle",
            "caption": "One line per connection in the ps output."
          },
          {
            "label": "The guest list",
            "heading": "pg_hba.conf: who may connect",
            "text": "Now the guest list. The backend checks a file called pg_hba.conf. HBA stands for host based authentication. Each line says: this type of connection, to this database, by this user, from this address, must prove itself in this way. Look at the second line: Maria may connect to the shop database, only from 10.20.30.50, using a password with a method called scram. The last line rejects everyone else.",
            "image": "/courses/postgresql/architecture/17.webp"
          },
          {
            "label": "First match wins",
            "heading": "The first matching line decides",
            "text": "Here's the rule that catches people out. PostgreSQL reads the file from top to bottom, and uses the first line that matches the connection type, database, user and address. There's no second chance. If that line's check fails, PostgreSQL doesn't try the lines below it. And if no line matches at all, the connection is refused. So the order of the lines really matters. Put the specific rules first, and the general ones last.",
            "caption": "No match, or a failed check, means no entry."
          },
          {
            "label": "Try it",
            "heading": "When there's no matching line",
            "text": "This is the error you'll see when no line matches. In plain words: Maria tried to connect from a different computer, and the guest list has no line for her from that address. The message tells you exactly which host, user and database to check.",
            "code": "FATAL:  no pg_hba.conf entry for host \"10.20.30.77\", user \"maria\", database \"shop\"",
            "caption": "The guest list has no line for this connection."
          },
          {
            "label": "Ways to prove identity",
            "heading": "Use scram-sha-256 for passwords",
            "text": "The last column, the method, says how users must prove who they are. For passwords, the recommended method is scram-sha-256. The older md5 method is deprecated, and will be removed in a future release. Peer is common for local connections on Linux: if you're logged in as the Linux user postgres, you connect as the database user postgres. And trust lets anyone in with no password at all, so avoid it, except on a test machine that only you can reach.",
            "caption": "md5 is deprecated; trust lets anyone in."
          },
          {
            "label": "In real companies",
            "heading": "Change the file, then reload",
            "text": "In a real company, users can't add themselves to this file. A developer or application team raises a request, and the database administrator team adds the right line, for the right user, database and address. After editing the file, you don't need a restart. You tell PostgreSQL to reload its configuration, with pg_ctl reload, or with the SQL function pg_reload_conf(). And before reloading, a view called pg_hba_file_rules shows how PostgreSQL reads each line, which helps you catch mistakes early.",
            "caption": "pg_ctl reload or SELECT pg_reload_conf();"
          },
          {
            "label": "Can't connect?",
            "heading": "Four checks, in order",
            "text": "Let's turn this into a simple checklist for connection problems. One: is PostgreSQL listening on the right address and port? Two: can the client reach the server at all, or is a firewall blocking the way? Three: is there a pg_hba.conf line that allows this user, database and address? And four: is the user name and password correct, for the method in that line? Check them in this order, and most connection problems are solved in minutes.",
            "image": "/courses/postgresql/architecture/22.webp"
          },
          {
            "label": "One more limit",
            "heading": "max_connections: how many guests at once",
            "text": "One more limit at the door. A setting called max_connections decides how many sessions can be connected at the same time. The default is usually 100. When every slot is taken, new users get the error: sorry, too many clients already. Remember that from the first video? Now you know where it comes from. Usually, the fix is a connection pooler, rather than just raising the number, but we'll talk about that later in the series.",
            "caption": "The default is usually 100."
          },
          {
            "label": "The path of a query",
            "heading": "Five steps inside the backend",
            "text": "Maria is in. Now she runs a query. Inside her backend process, every query passes through five main steps. The parser checks the grammar. The analyzer checks that the tables and columns really exist. The rewriter expands views and rules. The planner works out the cheapest way to get the answer. And the executor actually does the work, and sends back the rows. This is based on a chapter in the official documentation called the path of a query. Let's follow one query through all five.",
            "image": "/courses/postgresql/architecture/24.webp"
          },
          {
            "label": "Try it",
            "heading": "Maria's query",
            "text": "Here's Maria's query. In plain English: show me the order numbers and amounts for customer number 42. It looks simple. But behind the scenes, PostgreSQL does quite a lot of thinking before it reads a single row.",
            "code": "SELECT order_id, total FROM orders WHERE customer_id = 42;",
            "caption": "We'll follow this one query through every step."
          },
          {
            "label": "Step 1: the parser",
            "heading": "Is the grammar right?",
            "text": "Step one, the parser. It reads the query as plain text, and checks only the grammar. Are the keywords spelled correctly? Are they in the right order? Are the brackets and commas where they should be? Think of a spell checker reading a letter before it's posted. At this stage, PostgreSQL doesn't even look at your tables. It only checks that the sentence is valid SQL. If it is, the parser builds a tree that describes the query.",
            "caption": "Spelling and structure only, no table lookups yet."
          },
          {
            "label": "Try it",
            "heading": "A typo stops it at step 1",
            "text": "If you make a typo, this is where it stops. Suppose Maria types FORM instead of FROM. The parser replies: ERROR: syntax error at or near \"FORM\". Notice that PostgreSQL even points to the word where it got confused. Whenever you see syntax error, you know the query never got past step one.",
            "code": "ERROR:  syntax error at or near \"FORM\"",
            "caption": "Someone typed FORM instead of FROM."
          },
          {
            "label": "Step 2: the analyzer",
            "heading": "Do these tables and columns exist?",
            "text": "Step two, the analyzer. The official documentation calls it the transformation process. Now PostgreSQL looks up the names in its system catalog. Is there really a table called orders? Does it have columns called order_id, total and customer_id? What are their data types? If Maria had typed \"order\", without the s, she would get: ERROR: relation \"order\" does not exist. The grammar was fine, but the table wasn't there.",
            "caption": "Now PostgreSQL looks things up in its catalog."
          },
          {
            "label": "Step 3: the rewriter",
            "heading": "Views are expanded into real tables",
            "text": "Step three, the rewriter. This step matters mostly when you use views. A view is a saved query with a short name. Say a team creates a view called big_orders, which means: orders with a total above $500. When someone selects from big_orders, the rewriter swaps the short name for the real query underneath, so PostgreSQL works on the actual tables. For Maria's simple query, there's nothing to rewrite, and it passes straight through.",
            "caption": "A view is a saved query with a short name."
          },
          {
            "label": "Step 4: the planner",
            "heading": "Many ways to the answer, pick the cheapest",
            "text": "Step four, the planner, also called the optimizer. This is the brain of the whole process. There's usually more than one way to get the answer. Think of finding one book in a huge library. You could walk past every shelf, checking every book. Or, you could look it up in the catalogue, and go straight to aisle B, shelf seven. In PostgreSQL, walking every shelf is a sequential scan. Using the catalogue is an index scan. The planner estimates the cost of each way, and picks the cheapest.",
            "image": "/courses/postgresql/architecture/30.webp"
          },
          {
            "label": "Try it",
            "heading": "EXPLAIN shows the plan",
            "text": "You can see the planner's choice yourself. Put the word EXPLAIN in front of any query. PostgreSQL doesn't run it. Instead, it shows the plan it would use. Here, it chose an index scan on the customer_id index, and it estimates about 11 rows. The cost numbers are not seconds. They're relative units the planner uses to compare one plan with another. EXPLAIN is one of the most useful tools a database administrator has, and we'll use it a lot later in the series.",
            "code": "Index Scan using orders_customer_id_idx on orders (cost=0.43..12.50 rows=11 width=14)",
            "caption": "Simplified EXPLAIN output for Maria's query."
          },
          {
            "label": "Statistics",
            "heading": "The planner relies on statistics",
            "text": "But how does the planner know that customer 42 has about 11 orders? It uses statistics: facts about each table, collected in advance. How many rows there are, and how much space the table takes on disk. Which values appear most often. How many distinct values a column has, and how many are empty. These statistics are gathered by a command called ANALYZE, and automatically by a background process called autovacuum.",
            "image": "/courses/postgresql/architecture/32.webp"
          },
          {
            "label": "Out of date?",
            "heading": "Old statistics, wrong plan",
            "text": "Now, what if the statistics are out of date? Imagine using a sat nav with a map from five years ago. It confidently sends you down a road that's been closed for years, while a brand new road sits right next to it. The sat nav isn't stupid. It's just working with old information. The planner is exactly the same. Give it wrong numbers, and it makes a wrong plan.",
            "image": "/courses/postgresql/architecture/33.webp"
          },
          {
            "label": "A real example",
            "heading": "Analysed at 100 rows, now 5 million",
            "text": "Here's how that looks in real life. A new table is analysed when it has just 100 rows. Then a big data load adds 5 million rows, before the statistics are updated. The planner may still think the table is tiny, and choose a plan that's fine for 100 rows, but terribly slow for 5 million. The query that took milliseconds yesterday now takes minutes. The fix is often simple: run ANALYZE on the table, and make sure autovacuum is working properly.",
            "caption": "Fix: run ANALYZE, and keep autovacuum healthy."
          },
          {
            "label": "Step 5: the executor",
            "heading": "The executor does the real work",
            "text": "Step five, the executor. It takes the chosen plan and follows it, step by step. It reads the table and index pages it needs. If those pages are already in memory, that's fast. If not, it reads them from disk. Then it filters the rows, sorts them or joins them with other tables if the plan says so, and finally sends the rows back over the connection to Maria.",
            "image": "/courses/postgresql/architecture/35.webp"
          },
          {
            "label": "Permissions",
            "heading": "No privilege, no data",
            "text": "Getting in through the door doesn't mean you can read everything. Before any data is read, PostgreSQL checks that the user has the right privilege on every table in the query. Maria may be allowed to connect to the shop database, but if nobody granted her select on the orders table, the query stops right there. Connecting and reading are two separate permissions.",
            "caption": "Checked before a single row is read."
          },
          {
            "label": "Try it",
            "heading": "When the privilege is missing",
            "text": "And this is the message she gets: ERROR: permission denied for table orders. Notice the difference from the earlier error. The pg_hba.conf error said FATAL, and happened at the door, before she got in. This one says ERROR, and happens later, inside her session, for one specific table. Reading the first word of the message already tells you which part of the architecture to look at.",
            "code": "ERROR:  permission denied for table orders",
            "caption": "Connected fine, but no SELECT privilege on this table."
          },
          {
            "label": "The result",
            "heading": "Rows go back to where you asked",
            "text": "Finally, the rows travel back to wherever the query came from. In PSQL, you see a neat table printed on your screen. In pgAdmin, the results appear in a grid. In an application, the driver hands the rows to the code, which might show Maria's past orders on a web page. Same server, same five steps, different ways of showing the answer.",
            "caption": "psql prints a table; an app receives a result set."
          },
          {
            "label": "A common myth",
            "heading": "PostgreSQL has no result cache",
            "text": "Let's clear up a common myth. You may hear that PostgreSQL keeps a cache of finished query results, and that's why the second run is faster. That's not true. PostgreSQL doesn't store query results for reuse. The second run is often faster for a different reason: the table and index pages it needs are already in memory, in PostgreSQL's shared buffers and in the operating system's cache, so less is read from disk. We'll look at shared buffers properly in the next video.",
            "caption": "Repeat runs are faster because the data is already in memory."
          },
          {
            "label": "The house rules",
            "heading": "postgresql.conf: the house rules",
            "text": "Now, the house rules. Every step we've seen uses resources: memory, processor time, disk, and connections. How much of each is allowed is controlled by settings, and the main place for them is a file called postgresql.conf. It holds hundreds of settings, each listed with its default value, and many with a short comment explaining what it does. Port, listen_addresses, max_connections, shared buffers and logging are all set here.",
            "image": "/courses/postgresql/architecture/40.webp"
          },
          {
            "label": "ALTER SYSTEM",
            "heading": "postgresql.auto.conf overrides postgresql.conf",
            "text": "There's a second file next to it, called postgresql.auto.conf. You don't edit this one by hand. It's written for you when you use the SQL command ALTER SYSTEM. For example, ALTER SYSTEM SET work_mem = '64MB'. If the same setting appears in both files, the auto file wins. So when a setting doesn't behave as you expect, always check both.",
            "caption": "Written by ALTER SYSTEM; don't edit it by hand."
          },
          {
            "label": "Reload or restart?",
            "heading": "Some settings need a restart",
            "text": "Here's something every database administrator must know: not every change takes effect the same way. Many settings only need a reload, which is instant, and doesn't disconnect anyone. But some can only be changed when the server starts, like port, listen_addresses, max_connections and shared buffers. For those, you need a restart, which means planning downtime. Changing a restart setting and only reloading is a classic mistake: the file says one thing, but the server is still using the old value.",
            "caption": "port, listen_addresses, max_connections, shared_buffers and more."
          },
          {
            "label": "Try it",
            "heading": "Checking a setting",
            "text": "How do you know which kind a setting is? Ask the view called pg_settings. It shows each setting's current value, and a column called context. If the context says postmaster, the setting needs a restart. If it says sighup, a reload is enough. And if it says user, each user can even change it for their own session. Two quick commands also help: SHOW config_file and SHOW hba_file, tell you exactly where the files are.",
            "code": "SELECT name, setting, context FROM pg_settings WHERE name IN ('max_connections', 'work_mem');",
            "caption": "context = postmaster means a restart is needed."
          },
          {
            "label": "Finer control",
            "heading": "Settings per database, per user, per session",
            "text": "Settings don't have to be the same for everyone. With ALTER DATABASE, you can give one database its own value. With ALTER ROLE, you can give one user a different value, for example more memory for the reporting user who runs big queries. And with SET, a user can change some settings just for their current session. The house rules have a general rule, plus special rules for particular guests.",
            "caption": "ALTER DATABASE, ALTER ROLE and SET."
          },
          {
            "label": "The data directory",
            "heading": "Where it all lives",
            "text": "So where do all these files live? Usually, in the data directory. That's the folder where PostgreSQL keeps everything: the configuration files we just discussed, the actual table and index files, and the write ahead log. The exact path depends on how PostgreSQL was installed. On some Linux systems, the configuration files are kept in a separate folder. When in doubt, connect and run: SHOW data_directory. We'll explore this folder in detail later in the series.",
            "image": "/courses/postgresql/architecture/45.webp"
          },
          {
            "label": "The whole journey",
            "heading": "From click to result",
            "text": "Let's put the whole journey together. Maria's client sends a connection request to the server's address and port. The postmaster starts a backend process just for her. The backend checks pg_hba.conf, and her password. Then, for each query, the backend parses and analyzes it, rewrites it if needed, plans the cheapest route, and executes it, sending the rows back. And through every step, the settings in postgresql.conf set the limits.",
            "image": "/courses/postgresql/architecture/46.webp"
          },
          {
            "label": "Coming from Oracle?",
            "heading": "Familiar ideas, new names",
            "text": "If you already know Oracle, here's a quick map. The postmaster does the job of the Oracle listener, waiting on a port for new connections. A backend process is like an Oracle dedicated server process: one per session. pg_hba.conf is a bit like valid node checking in sqlnet.ora, combined with how users authenticate. postgresql.conf plays the role of the spfile. And one difference: Oracle has a result cache, PostgreSQL doesn't. These aren't exact twins, but they help you find your feet.",
            "image": "/courses/postgresql/architecture/47.webp"
          },
          {
            "label": "Interview questions",
            "heading": "Questions you can now answer",
            "text": "You can now answer some very common interview questions. What happens when you run a query in PostgreSQL? What's the difference between the postmaster and a backend process? What is pg_hba.conf, and how are its lines matched? What's the difference between a reload and a restart? Why might a query suddenly become slow? And how do you see the plan for a query? Try answering each one out loud, in your own words. If you can, you really understand today's video.",
            "caption": "Postmaster vs backend · pg_hba.conf · reload vs restart · EXPLAIN"
          },
          {
            "label": "Recap",
            "heading": "Connect, check, parse, plan, execute",
            "text": "Let's recap. Every client reaches the server through an interface, on an IP address and a port, usually 5432. The postmaster starts one backend process per connection. The backend checks pg_hba.conf, where the first matching line decides. Every query is parsed, analyzed, rewritten, planned using statistics, and executed. There's no result cache, but data already in memory makes repeat runs faster. And postgresql.conf, plus the auto file, control the resources, with some settings needing a restart.",
            "caption": "And postgresql.conf sets the limits for every step."
          }
        ]
      }
    ]
  }
];
