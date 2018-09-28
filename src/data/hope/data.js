const questionJSON =
  {
    "questions": [
      {"text": "I’m looking for a group of Christian friends to connect with.", "categories": ["D"]},
      {"text": "Right now life is a bit challenging for me.", "categories": ["B"]},
      {"text": "I’m not sure who Jesus is and what I believe about him.", "categories": ["A"]},
      {"text": "I often find Bible reading to be a challenge.", "categories": ["C"]},
      {"text": "I have difficulty experience God as loving and compassionate.", "categories": ["C", "B"]},
      {"text": "I’m not quite sure how to talk to God.", "categories": ["A", "E"]},
      {"text": "I would really like to get my finances under control.", "categories": ["J"]},
      {"text": "I would like to know how invest more in my spouse.", "categories": ["I"]},
      {"text": "I’m often unclear about what God is trying to teach me.", "categories": ["C", "F", "G"]},
      {"text": "I would be interested in a refresher course on Christianity.", "categories": ["A"]},
      {"text": "I would really like to see my marriage go from good to great.", "categories": ["I"]},
      {"text": "I’m interested in what you have for Young Adults.", "categories": ["D"]},
      {"text": "I’m looking for volunteer opportunities at church.", "categories": ["H"]},
      {"text": "I’m having a hard time freeing myself from the pain of my past.", "categories": ["E", "B"]},
      {"text": "I really enjoy reading the Bible and applying it to my life.", "categories": ["F"]},
      {"text": "I clearly understand what it means to follow Jesus in everyday life.", "categories": ["C", "G"]},
      {"text": "I’m looking for a group or men/women to connect with.", "categories": ["D", "H"]},
      {"text": "My spouse and I would really use some “us” time.", "categories": ["I"]},
      {"text": "I’m interested in sports and fitness opportunities.", "categories": ["J"]},
      {"text": "I would like to become part of Hope’s prayer ministry.", "categories": ["E"]},
      {"text": "I would like to understand the Bible better.", "categories": ["F"]},
      {"text": "I’m seeking a group of people who want to make a difference.", "categories": ["D", "H"]},
      {"text": "I’d like to give more, but my finances are tight.", "categories": ["J"]},
      {"text": "I’m struggling with some habits I’d like to overcome.", "categories": ["B"]},
      {"text": "I would like to hear God’s voice more clearly", "categories": ["E"]},
      {"text": "I want to see God's plan for my life become a reality.", "categories": ["G"]},
      {"text": "I am unclear on how God wants to use me to serve and impact others.", "categories": ["G", "H"]},
      {"text": "I would like to know how to invest more in my kids.", "categories": ["I"]},
      {"text": "Reading the Bible can be challenging at times.", "categories": ["F"]},
      {"text": "I want to make a difference as I serve and lead others in Jesus’ Name.", "categories": ["H"]},
      {"text": "I’m interested in leading a healthier lifestyle.", "categories": ["J"]}
    ]
  };

const classesJSON =
  {
    "classes": {
      "Worshiping Together": {
        "title": "Worshiping Together",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/worship/",
        "shortDesc": "Each week, our services at Hope bring thousands of people together to celebrate the power of God’s life-changing love! Whatever service you choose – large or small, contemporary or traditional, weekend or midweek – you will always receive a warm welcome at a church that loves you, and loves to worship the Lord!",
        "longDesc": [],
        "schedule": "Weekly",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Alpha": {
        "title": "Alpha",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/grow/first-steps/alpha/",
        "shortDesc": "Alpha is offered several times throughout the year, and is an opportunity to explore the Christian faith in a relaxed, non-threatening manner. Alpha is enjoyed as much by those who have never set foot in a church, as it is by the regular church-goer. No matter your background, whether investigating Christianity for the first time or revisiting your faith, you are certain to benefit from the Alpha Course!\n" +
          "\n" +
          "If you are \"new\" to Christianity, or are a seasoned Christian wanting to brush up on the basics, we suggest Alpha as a great way to get connected and grow! Through the years, thousands of people have participated in Alpha here at Hope.",
        "longDesc": [],
        "schedule": "Sessions offered throughout the year",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Revive (Young Adult Ministries)": {
        "title": "Revive (Young Adult Ministries)",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/connect/adults/young-adults/",
        "shortDesc": "REVIVE is a welcoming and passionate Spirit-led community for young adults (college-age and those in their 20s & 30s), focused on building meaningful relationships and developing followers of Jesus. There are multiple opportunities both ongoing and on a seasonal basis to connect, grow and serve together outside of worship. ",
        "longDesc": ["REVIVE Worship service – (weekly/ongoing) This casual, come-as-you-are worship service for young adults (college-age and those in their 20s & 30s) is a great way to worship through music, God’s Word and a message. The worship is intimate and Spirit-led, and the messages are specific to young adult life. All young adults welcome! REVIVE Worship happens Thursdays, at 7:00 pm.", "REVIVE Small Groups – (ongoing) Looking for a way to connect with other young adults who want to grow in their faith? These groups are for you! Groups change seasonally. Contact us at revive@hopewdm.org to ask about current groups.", "REVIVE Events and Service Opportunities – (ongoing) REVIVE offers several fellowship events and service opportunities throughout the year. If you are interested in becoming a part of these events and opportunities, check out Hope’s website for more information. Search: “Revive”", "REVIVE Classes – (fall, winter, spring) REVIVE offers classes on different topics ranging from relationships to the Bible. Check out the REVIVE page on the Hope website for current classes or email REVIVE."],
        "schedule": "Thursdays, 7:00-8:15 pm",
        "beginAge": 16,
        "endAge": 39,
        "gender": "either"
      },
      "Revive Community (Young Adult)": {
        "title": "Revive Community (Young Adult)",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/connect/adults/young-adults/",
        "shortDesc": "Looking for a way to connect with other young adults who want to grow in their faith? These groups are for you! Groups change seasonally. Contact us at revive@hopewdm.org to ask about current groups.",
        "longDesc": [],
        "schedule": "",
        "beginAge": 16,
        "endAge": 39,
        "gender": "either"
      },
      "Opportunities to Receive Prayer": {
        "title": "Opportunities to Receive Prayer",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/connect/by-interest/prayer/",
        "shortDesc": "Through prayer, God connects to us and then we connect to each other. The Prayer Ministry supports Hope's mission to \"reach out to the world around us and share the everlasting love of Jesus Christ\" through various forms of prayer. We would love to pray for you!",
        "longDesc": ["One-on-One Weekend Prayer – Partners are available after every weekend worship service inside the Worship Center under the video screens to the left and right of the stage.", "Thursday Night Prayer – Trained prayer partners are available to pray for you weekly in the Prayer Room. Come share your joys, sorrows, health concerns or anything else God is laying on your heart. Partners will pray for you in thanksgiving, grief or petition. You are free to come and go throughout the evening. Thursday Night Prayer happens 5:30-6:30 & 8:30-9:00 pm.", "Inner Healing Prayer – (by appointment) An Inner Healing Prayer session is a facilitated conversation with God that helps you receive healing from spiritual and emotional wounds, uncovering the truths that show you who you are in Christ. Sessions typically last from one to three hours, and are conducted by trained volunteers who have a heart to help others overcome obstacles and connect with God. These are not counseling sessions, but a time of interacting with God for wholeness. Email us at prayer@hopewdm.org to schedule a session.", "Emergency Prayer – (available 24 hours, 7 days a week) If you are in need of emergency care, please call 515-875-5300 to reach the pastor on call."],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Inner Healing Prayer": {
        "title": "Inner Healing Prayer",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/connect/by-interest/prayer/",
        "shortDesc": "An Inner Healing Prayer session is a facilitated conversation with God that helps you receive healing from spiritual and emotional wounds, uncovering the truths that show you who you are in Christ. Sessions typically last from one to three hours, and are conducted by trained volunteers who have a heart to help others overcome obstacles and connect with God. These are not counseling sessions, but a time of interacting with God for wholeness. Email us at prayer@hopewdm.org to schedule a session.",
        "longDesc": [],
        "schedule": "(by appointment)",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Recovery Ministries": {
        "title": "Recovery Ministries",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/calendar/eid/235dfc49da7d5f57/west-des-moines/celebrate-recovery/",
        "shortDesc": "Celebrate Recovery provides a healing, healthy environment for adults affected by hurts, hang-ups and habits. At Celebrate Recovery, you will hear about the healing power of Jesus Christ through eight recovery principles. These biblical principles, when applied to our lives, not only allow us to grow spiritually, but free us from our addictive, compulsive and dysfunctional behaviors, drawing us closer to a stronger personal relationship with God and others.",
        "longDesc": ["Celebrate Recovery – Celebrate Recovery consists of a time of worship and teaching as well as breakout groups and a fellowship time afterwards. Celebrate Recovery happens Thursdays, from 6:30-9:00 pm", "Celebration Place – Celebration Place is a complementary children’s resource to Celebrate Recovery that is available 52 weeks a year for children age 5 – grade 6. While adults explore topics that bring healing and wholeness, kids have the opportunity to discover the same truths in age-appropriate ways. Celebration Place is designed to inspire kids with hope, joy and happiness while they learn to rely on God. Celebration Place happens Thursdays, 6:00-8:30 pm.", "The Landing (grades 7-12) – The Landing is a safe place where students in grades 7-12 can live a freer, healthier and more God-centered life! Through weekly small and large group discussions, we will explore biblical truths; talk freely about what’s happening in our lives; and bring to light current issues and challenges, encouraging one another to work through them in Christ-centered ways. Travel the path to freedom, healing and wholeness, and join us for The Landing! The Landing happens Thursdays, 6:30-8:30 pm.", "Celebrate Recovery Women’s Journey Begins – Are you ready to become free from life’s hurts, habits and hang-ups? By working through the eight recovery principles found in the Beatitudes with Jesus Christ, you can (and will) change! You will begin to experience the true peace and serenity you have been seeking. Women’s Journey Begins happens Mondays, 6:30-8:30 pm."],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Support Ministries": {
        "title": "Support Ministries",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/search/?addsearch=Care",
        "shortDesc": "There are a variety of support groups and ministries available throughout the year to provide encouragement, support, and emotional and spiritual healing. Please view the list below to find a group that works best for you.",
        "longDesc": ["ONE-2-ONE – (by appointment) Hope One-2-One Care Givers are trained volunteers who provide one-on-one Christian support and encouragement to those going through a difficult season in life. Whether an individual is going through a divorce, is grieving, recently unemployed, having trouble in a relationship, suffering from an illness, or something else that is causing them anxiety or pain, One-2-One Care Givers are there to listen and help. Typically meeting for an hour on a weekly basis, care givers and care receivers are matched men to men, and women to women. For more information, please contact Hope’s Care Team at: care@hopewdm.org ", "GriefShare – (fall, winter) GriefShare is a friendly, caring group of people who will walk alongside you through one of life’s most difficult experiences. You don’t have to go through the grieving process alone.  GriefShare meets Tuesdays, 6:30-8:30 pm.", "DivorceCare – (winter, spring, fall) Are you or someone you love hurting from the pain of separation or divorce? If so, Hope offers a confidential weekly seminar and support group. Be with people who understand what you are feeling, and hear valuable information about how to heal from the hurt of divorce and ways to handle the stresses that go with it. The format includes video teaching, study guide, small group discussion and prayer. DivorceCare meets Tuesdays, 6:30-8:15 pm.", "NAMI Family-to-Family Monthly Support – (fall, spring) This group is led by a trained facilitator and offers the support needed by families and caregivers who have a loved one with a mental illness. This is a place to share, discuss and resolve issues as they come up. NAMI meets the Second Thursday of the month, 6:30-8:30 pm", "Kindred Adoption Support – (spring, summer) This encouraging network and support group is open to foster and adoptive families, specifically those in the role of caring for children of their kin/family. Kindred Adoption Support meets the Third Tuesday of the month, 6:00-8:00 pm.", "Foster Care and Adoption Support – Foster and adoptive parents need to surround themselves with people who can encourage them when things are difficult. Foster children are healing and adjusting, and so is the entire family. Foster Care and Adoption Support meets the Second Tuesday of the month, 6:00-8:00 pm.", "Gluten Free Newbies – (fall-spring) This support group is for anyone in their first year of being gluten-free. The first half hour will focus on topics such as reading labels, grocery shopping, resources and eating out. The second half hour will be a time for people to ask questions about their diet. Gluten Free Newbies meets the Second Monday of the month, 7:00-8:00 pm."],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Financial Peace University": {
        "title": "Financial Peace University",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/calendar/eid/60263de216a31c0f/west-des-moines/financial-peace-university/",
        "shortDesc": "Financial Peace University offers two biblically based curriculums that teach people how to handle money God’s way.",
        "longDesc": ["Financial Peace University – (fall, winter and spring) Financial Peace University is a nine-lesson, money-management class that teaches people how to handle money God’s way. Financial Peace University will walk you through the basics of budgeting, dumping debt, planning for the future, and much more. And now you can experience this life-changing class the way that’s best for you: with other people in a local group, online at your own pace or both!", "Legacy Journey – (fall, winter and spring) The Legacy Journey is a biblically based course that teaches you how to truly live and leave a legacy for generations to come. This course will lead you deeper into investing, basic estate planning, purposeful living, safeguarding your legacy, and discovering the keys to generational wealth and true generosity. You’ll learn a biblical framework for living intentionally now so later you’ll be able to leave a legacy that will secure your family’s future and make a lasting impact on the world around you.", "Becoming a Money Smart Women – (September workshop) In this 2 part workshop for women you will learn how to manage your family's finances in under one hour per month, receive tools to save your family hundred to thousands of dollars yearly and learn to establish goals and set priorities. The workshop includes two interactive planning sessions, detailed instruction manual and handouts."],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "CORE Series": {
        "title": "CORE Series",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/grow/what's-next/core/",
        "shortDesc": "CORE is a great next step for those who have previously taken Alpha or the Apprentice Series, and is a class for individuals looking to be equipped and empowered to grow as a disciple and follower of Jesus Christ! \n" +
          "Are you interested in exploring and trying out the basics of walking with Jesus? Join us to dig deeply into God’s overarching story in the Bible and finding yourself in the story. Spend time getting to know the Bible, and walk away with tools for a lifetime of walking with Jesus.",
        "longDesc": ["CORE 1: Finding Yourself in God’s Story – (fall, winter, spring) Are you interested in exploring and trying out the basics of walking with Jesus? Join us to dig deeply into God’s overarching story in the Bible and finding yourself in the story. Spend time getting to know the Bible, and walk away with tools for a lifetime of walking with Jesus.", "CORE 2: Our Identity in God’s Story – (fall, winter, spring) Our identity in Christ is the fuel for our lives. Join us to discover where God has been involved in your life story; how to develop an identity rooted in him; and what it means to have a healthy, sustainable rhythm to life.", "CORE 3: Living out our Identity in God’s Story – (fall, winter, spring) Are you interested in putting your faith into action, learning how to follow Jesus daily? Join us as we discover practical ways you can connect in community, grow in your faith, and serve God in His mission.", "Life Map Timeline Seminar (Remembering Your Story)  – (fall, spring) Used in conjunction with CORE, the Life Map Timeline is a discovery process that helps you reflect on your own life story. Life mapping offers you the chance to gain perspective on where God has been in the midst of the good experiences and the hard experiences, and where God has provided daily bread in a number of ways along your journey. Life mapping will also provide a chance to look at where God might be using your unique story and gifts to further his mission to the world around you."],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Apprentice Series": {
        "title": "Apprentice Series",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/grow/what's-next/apprentice-series/",
        "shortDesc": "The Apprentice Series is a collection of three consecutive classes, each one focused on a different topic. In these classes, you’ll be placed into a small group where you’ll pray, read, discuss, and participate in weekly spiritual exercises to help you grow in your relationship with God. As you work through these topics, you’ll discover your heart being shaped by the truth of Jesus Christ – and your life being changed.",
        "longDesc": ["The Good and Beautiful God – (fall) We all have ideas that we tell ourselves about God and how he works in our lives. Some are true but many are false. This course invites you to put your ideas of God to the test to see if they match up with what Jesus himself reveals about God.", "The Good and Beautiful Life – (winter) This class focuses on our lives, hearts and characters. It takes participants through the Sermon on the Mount section by section and addresses common struggles in human life such as anger, lust, lying, worrying and judging others. Discover a new way to experience life.", "The Good and Beautiful Community – (spring) Our daily encounters with others are the arenas in which our relationship with God becomes real. This class offers ways to which followers of Jesus can have healthy relationships and become blessings to the world around them. Explore the second part of the Great Commandment: loving our neighbor as ourselves."],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Life Groups": {
        "title": "Life Groups",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/grow/first-steps/life-groups/",
        "shortDesc": "“We’re better together!” We tend to say that a lot around here. And, we say it because it’s true. God created us to live in community with one another. The purpose of Hope’s Life Groups ministry is to bring people together in growing, Christ-centered relationships. Life Groups at Hope are small groups of people who meet regularly to pray together, connect in Christ-centered relationships, grow in their relationship with God, and serve the world around them.\nHere at Hope, we have five main ways for people to join a Life Group. We encourage you to check out one of the options below:",
        "longDesc": ["Take Alpha – an opportunity to explore the Christian faith in a relaxed, non-threatening manner. Alpha is offered several times a the year. This is a great way to get connected with a group of people, and then choose to continue to meet as a Life Group once the class has finished.", "Take the Apprentice Series – In these three series classes, you’ll be placed into a small group where you’ll pray, read, discuss, and participate in weekly spiritual exercises to help you engage with the chapter.", "Take CORE – a great next step for those who have taken Alpha or the Apprentice Series.", "Participate in Group Launch – a class offered to kickstart Life Groups, where participants are encouraged to continuing meeting once the class has ended.", "Join an existing Life Group – contact us at lifegroups@hopewdm.org and we’ll do our best to match you with a group.", "Join an Interest Group – Interest-based groups are groups of people who gather around a shared interested to connect in Christ-centered relationships. There are a variety of groups available for people to get plugged in. To connect with an interest-based group, contact us at lifegroups@hopewdm.org.", "Join the REVIVE College Group – Looking for a way to connect with other college students who want to grow in their faith? This group is for you! REVIVE College Group meets Thursdays after REVIVE worship, 8:30-9:45 pm."],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Mens Ministries": {
        "title": "Men’s Ministries",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/connect/adults/men/",
        "shortDesc": "Hope’s Men’s Ministry invites Men of Hope to build authentic relationships, while learning to embrace a Biblical definition of manhood that can be applied in their homes and communities. We do this in a number of ways, including going deeper into God’s word, developing a healthy prayer life, relational fellowship, and service both at Hope and in the community!",
        "longDesc": ["Monday PM for Men – (ongoing) An opportunity for men to connect and go deep into God’s word. There will be a time of large group prayer and fellowship with varying small group studies and breakouts to follow. Monday PM for Men meets Mondays, 6:30-8:30 pm", "AM Pastor’s Study for Men – (ongoing) The Pastor’s Study for Men is an exciting time of in-depth yet practical study of the Bible. The goal is to help men become confident in their ability to read, interpret and apply Scripture to their daily lives. Individuals and Life Groups are welcome! AM Pastor’s Study for Men meets Tuesdays, 7:00-8:00 am.", "Breakfast and the Bible for Men – (ongoing) Gather with other men of Hope for breakfast and small group breakouts for study. Breakfast runs from 6:15-6:45 am with large group gathering until 7:00 am, followed by several small group studies. Come weekly, or as often as you are able to join us! Breakfast and the Bible meets Wednesdays 6:15 am – 8:00 am.", "Pretty Interesting Guy Stuff – (ongoing) An opportunity for men to connect and go deep into God’s word as well as serve alongside other men. There will be a time of large group prayer and fellowship with varying small group studies and breakouts to follow. Pretty Interesting Guy Stuff meets Thursdays, 6:30-8:00 am.", "Figuring Out Fatherhood – (summer) Looking for a way to grow as a dad, leader and all around human being without investing a ton of time and energy? Consider joining a roundtable! We’d love to have you join us for group-based coaching conversations designed to take the Book of Proverbs off of your shelf and inject it into your life. The first class will take place at Hope WDM. The rest of the classes will be virtual meetings on Zoom. A link to the event will be sent to attendees after the first week. Figuring Out Fatherhood meets Mondays, June 4 – Aug. 6, 8:00-9:00 pm. For more information, contact: men@hopewdm.org"],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "male"
      },
      "Womens Ministries": {
        "title": "Women’s Ministries",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/connect/adults/women/",
        "shortDesc": "Hope’s Women’s Ministry is committed to renewing and restoring the Women of Hope through classes, seminars, groups, retreats and special events. Come join a spirited, authentic community of women where women’s needs are met in every stage of life!",
        "longDesc": ["Monday Morning Moms – (ongoing) Being a mom is hard! Gather with moms of all ages for faith-based discussion and fun. Receive support and encouragement while connecting with each other in life and parenting matter. Monday Morning Moms meets Mondays, 9:30 - 11:00 am.", "Monday Evening Group for Women – (summer) “Women and Money” – Join us for a four-week course on spending money wisely, understanding your credit and saving money for your future. Our last class touches on Financial Peace University techniques featuring a panel of Hope members. Other coming topics include: “Jesus Calling,” “Faithfully Well,” and “The Woman of Christmas.” The Monday Evening Group for Women meets Mondays, 6:30-8:00 pm.", "Tuesday AM/PM for Women – (ongoing) This focuses on God, his people and his love for us, as well as his strength in spite of our weaknesses. Participants will be encouraged to view weaknesses as the keys the Lord gives us to unlock the full experience of his strength in our lives. Instead of ignoring, neglecting or trying to escape our weaknesses, join us as we learn to see them as the gifts given specifically and strategically by God. Topics include “Uninvited (roots of rejection),” and “One in a Million (finding God’s purpose).” The Tuesday AM for Women meets Tuesdays, 9:30-11:00 am.", "SALT for Women – (ongoing) We gather on Tuesday mornings to explore the anchoring truths of bearing treasures in jars of clay, meeting Christ through a pressing thorn, opening wide our hearts in the midst of hurtful relationships, and what it means to embrace the lost and lonely as ministers of the new covenant. Each of us has a message to proclaim and live by: Because of Jesus the old has gone, the new has come. SALT meets Tuesdays, 6:30-8:00 am.", "Pastor’s Study for Women – (ongoing) The Pastor’s Study for Women is an exciting time of in-depth yet practical study of the Bible. The goal is to help Christian women become confident in their ability to read, interpret and apply Scripture to their daily lives. Individuals and Life Groups are welcome! Pastor’s Study for Women meets Wednesdays, 9:00-10:00 am.", "The Mommy Network – (ongoing) Moms of all ages and stages and their children are invited to join us as we meet for a planned activity. Additional opportunities for connection can be found via The Mommy Network Facebook group throughout the month. The Mommy Network meets the First Friday of the Month, 10:11:30 am.", "Becoming a Money Smart Woman – (September 2018 workshop) In this two-part workshop for women, you will learn how to manage your family's finances in less than one hour per month, receive tools to save your family hundreds to thousands of dollars yearly, and learn to establish goals and set priorities. The workshop includes two interactive planning sessions, detailed instruction manual, and handouts."],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "female"
      },
      "Fifties Plus Ministries": {
        "title": "Fifties Plus Ministries",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/connect/adults/50-plus/",
        "shortDesc": "The 50+ Ministry seeks to enrich the lives of 50+ adults by offering engaging activities to fulfill their social, vocational, spiritual, intellectual, emotional, physical and relational needs, so the world is blessed by their presence and ministry. These include monthly luncheons and game nights, special events, and service and travel opportunities.",
        "longDesc": [],
        "schedule": "",
        "beginAge": 50,
        "endAge": 99,
        "gender": "either"
      },
      "Let Prayer Change Your Life": {
        "title": "Let Prayer Change Your Life",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/connect/by-interest/prayer/",
        "shortDesc": "In this course you will learn a step by step approach for creating or enhancing daily one-on one time with God. This course provides structure to daily devotions, prayers, sermon notes, Bible study and more so the time you spend with God is meaningful, inspiring and ultimately life-changing.",
        "longDesc": [],
        "schedule": "(fall, winter, spring)",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "School for Listening Prayer": {
        "title": "School for Listening Prayer",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/connect/by-interest/prayer/",
        "shortDesc": "Many people experience prayer to be a one-way street, kind of like talking to a brick wall. But the Bible says prayer is dynamic – a two-way conversation with God where lives are transformed. In this hands-on workshop, we’ll discover together the many ways God speaks to us and how to respond to what we hear.",
        "longDesc": [],
        "schedule": "(fall, winter)",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Prayer Ministry Training": {
        "title": "Prayer Ministry Training",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/connect/by-interest/prayer/",
        "shortDesc": "In this course you will learn a step by step approach for creating or enhancing daily one-on one time with God. This course provides structure to daily devotions, prayers, sermon notes, Bible study and more so the time you spend with God is meaningful, inspiring and ultimately life-changing.",
        "longDesc": [],
        "schedule": "(fall, winter, spring)",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Discovering Gods Story: Biblical Survey": {
        "title": "Discovering God’s Story",
        "url": "",
        "shortDesc": "Click the MORE button to see opportunities below.",
        "longDesc": ["For Women: Introduction to the Bible – (late summer, fall) A class for both beginners and those fairly comfortable with the Bible and Bible study. We will review the how and why of Bible study and take a panoramic view of the Bible’s sweeping story from Genesis to Revelation, placing the narrative into the larger historical, cultural, social and political context and discovering how God continues to move in our world today.", "The Gospel of Mark – (fall)  In this course we will read, study and discuss the Gospel of Mark. Many believe Mark’s gospel was the first to be written. It has a lot of zip and punch. Join us as we learn about Jesus, about God, and about ourselves.", "Crossways—A Study of the Bible – (multiple sections: fall, winter, spring) The Crossways Bible study is an unforgettable, in-depth journey through the entire Bible. This course helps you understand the unique message of each book of the Bible in relation to all the others. Through Crossways, you will be able to see the connections between Old and New Testaments like never before. "],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Books and Topics of the Bible": {
        "title": "Books and Topics of the Bible",
        "url": "",
        "shortDesc": "Click the MORE button to see opportunities below.",
        "longDesc": ["David:  A man after God’s own heart – (fall, winter)\n" +
        "In Ps 18:29, David writes, “by my God I can leap over a wall.”  This is David:  exuberant, energetic, flawed, and faithful.  In this study we will explore David’s story to discover how God works to develop our character as men and women of God called to practice and model an honest spirituality", "Pastor’s Studies for Men and Women – (ongoing)\n" +
        "The Pastor’s Study for Women is an exciting time of in-depth yet practical study of the Bible. The goal is to help Christian women become confident in their ability to read, interpret and apply Scripture to their daily lives. Individuals and Life Groups are welcome! Men meet Tuesday mornings at 7:00 and Women meet Wednesday mornings at 9:00.\n" +
        "\n" +
        "Pastor’s Study For Women: http://www.lutheranchurchofhope.org/west-des-moines/calendar/eid/1b5d7337007b4d94/west-des-moines/pastors-study-for-women/\n" +
        "\n" +
        "Pastor’s Study for Men: http://www.lutheranchurchofhope.org/west-des-moines/calendar/eid/c284d8c2f532e2be/west-des-moines/pastors-study-for-men/\n"],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Purposeful Living Series": {
        "title": "Purposeful Living Series",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/connect/by-interest/purposeful-living/",
        "shortDesc": "How can we come to know God? This six week class helps us identify God’s presence and love in our life journey by reflecting on our own personal stories. We will also take practical steps to discover where God is at work in our lives and how we might join him. God is not a “once upon a time” God…God is a “never-ending story” God, in whose story we are scripted.",
        "longDesc": ["Purposeful Living 1 – Discovering God’s Presence in your Story – (fall, winter) How can we come to know God? This six week class helps us identify God’s presence and love in our life journey by reflecting on our own personal stories. We will also take practical steps to discover where God is at work in our lives and how we might join him. God is not a “once upon a time” God…God is a “never-ending story” God, in whose story we are scripted.", "Purposeful Living Retreat 1 – Focused Living Retreat – (fall, winter) Focused Living is a personal development discovery retreat that helps Christians clarify their life direction and personal calling. The Focused Living retreat helps participants learn how to better recognize (1) what God is at work doing and (2) how to set a path to align with his work. Focused Living seeks to address three core questions: Where have you been? Where are you going? Who can help you get there? The Focused Living retreat also serves as way take the first steps to apply Discovering God’s Presence in Your Story (PL 1).", "Purposeful Living 2 – Becoming the Person God Created You to Be – (winter, spring) An identity grounded in God would mean that when we think of who we are, the first thing that would come to mind is our status as someone who is deeply loved by God. This six week class will help us see ourselves the way God sees us. In this course we will discover what it means to truly be ourselves in light of God’s immense love for us. We will also learn how to surrender our need for control so that we can be transformed into the person God designed us to be.", "Purposeful Living Retreat 2 – Apex Retreat – (winter, spring) The Apex retreat is all about the discovery of a person’s life-contribution. Christians in the mid-game of their life journey often begin to look for ways to live a life of significance and impact. The Apex retreat is a two-day discovery process that helps Christ-followers develop a decision making grid that gives them greater focus, helping them clarify their unique and ultimate contribution to God’s Kingdom. The Apex retreat also serves as way take the first steps to apply Becoming the Person God Created You to Be (PL 2).", "Purposeful Living 3 – Living the Life You Were Meant to Live – (fall, spring) This six week class looks at God’s definition for success: to live a purpose-filled life on this earth, for your own benefit and the benefit of others. In this course you will learn how to discover God’s purpose for your life and live it out. You will also learn how God’s transforming work within us always precedes God’s transforming work through us. This course also provides tools to help you discover your life purpose and take steps to live out that purpose.", "Purposeful Living Retreat 3 – Resonance Retreat – (fall, spring) The Resonance retreat is about the end-game and the call to finish well in life. Resonance is a personal development discovery process designed to help participants navigate questions related to finishing well, especially one’s legacy and influence in the end-game. It draws upon past shaping and life experiences to discern an individual’s ultimate Kingdom contribution. It seeks to address three questions: What do I have to offer? Who am I supposed to offer it to? What will live beyond my days? The Resonance retreat also serves as way take the first steps to apply Living the Life You Were Meant to Live (PL 3).", "Remembering Your Story (Life Map Timeline Seminar) – (fall, spring)  Used in conjunction with the Purposeful Living courses, Life Map Timeline is a discovery process that helps you reflect on your own life story. Life mapping offers you the chance to gain perspective on where God has been in the midst of the good experiences and the hard experiences, and where God has provided daily bread in a number of ways along your journey. Life mapping will also provide a chance to look at where God might be using your unique story and gifts to further his mission to the world around you."],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Building a Life Map Timeline": {
        "title": "Building a Life Map Timeline",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/connect/by-interest/purposeful-living/",
        "shortDesc": "Used in conjunction with the Purposeful Living courses, Life Map Timeline is a discovery process that helps you reflect on your own life story. Life mapping offers you the chance to gain perspective on where God has been in the midst of the good experiences and the hard experiences, and where God has provided daily bread in a number of ways along your journey. Life mapping will also provide a chance to look at where God might be using your unique story and gifts to further his mission to the world around you. ",
        "longDesc": [],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Mission Opportunities, Local and Global": {
        "title": "Mission Opportunities, Local and Global",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/serve/",
        "shortDesc": "Hope partners with various mission partners in our community, throughout the United States and abroad. There is a place for you, and a purpose to what God can do through you! It’s who God designed us to be, to be servants of him to one another. So, whether you are looking for a way to reach out in our community locally, or if you’re looking to travel abroad as a member of a short-term missionary, there are ways for you to make a difference … today!",
        "longDesc": ["Serving Locally – As followers of Jesus Christ, we are called to reach out to our brothers and sisters in Christ – to be the face of Jesus to those who are sick, hungry, poor, or facing other desperate circumstances. In a very real way, the church of Jesus Christ has been given the task of carrying on his ministry, following his example into the lives of our neighbors, both here and abroad. Check out Hope’s Website under “Serve/Outside Hope/Local” to view over 30 local opportunities for serving locally, ranging from Youth Emergency Services and Shelter to Delta Emerging Leadership Academy.", "Serving Globally – As followers of Jesus Christ, we are called to reach out to our brothers and sisters in Christ – to be the face of Jesus to those who are sick, hungry, poor, or facing other desperate circumstances. In a very real way, the church of Jesus Christ has been given the task of carrying on his ministry, following his example into the lives of our neighbors, both here and abroad. Check out Hope’s Website under “Serve/ Outside Hope/National or Global” to discover our many national and global short-term mission opportunities ranging from Mission Appalachia to Mission Ghana.", "SERVE Course – Helping without Hurting – (fall and spring) This 4 week class is a guide to the who, what, where, and how of missions/outreach. SERVE is for everyone, from the experienced volunteer, to those simply looking to learn more about serving. Many opportunities to serve abound within the walls at Hope and locally, nationally, or globally through Hope’s Missions Partners, this is a great place to start."],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Equip": {
        "title": "Equip",
        "url": "",
        "shortDesc": "Click the MORE button to see opportunities below.",
        "longDesc": ["EQUIP Roundtable – Looking for a way to receive leadership training without investing a ton of time and energy? Consider joining a roundtable! We'd love to have you join us for these group-based leader development coaching conversations designed to take the Book of Proverbs off of your shelf and inject it into your life. Equip Roundtable meets Mondays from 12:00-1:00 pm. http://www.lutheranchurchofhope.org/west-des-moines/calendar/eid/546ff652f0bab9fe/west-des-moines/equip-roundtable---mondays/", "EQUIP – Leader Breakthru Coaching Skills Training – (fall, spring) Leader Breakthru’s Two-Day Coaching Skills Training introduces you to the four core coaching skills (listening, expanding, focusing and empowering) and uses them to enhance your coaching abilities. You will also be trained on how to coach and conduct a breakthrough coaching conversation using the IDEA Coaching Pathway.",],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "EQUIP - Other Leadership Development Opportunities": {
        "title": "EQUIP – Other Leadership Development Opportunities",
        "url": "",
        "shortDesc": "In partnership with Purposeful Living EQUIP offers the following seminars throughout the year.",
        "longDesc": ["Focused Living Retreat – (fall) Focused Living is a personal development discovery retreat that helps Christians clarify their life direction and personal calling. The Focused Living retreat helps participants learn how to better recognize (1) what God is at work doing and (2) how to set a path to align with his work. Focused Living seeks to address three core questions: Where have you been? Where are you going? Who can help you get there? The Focused Living retreat also serves as way take the first steps to apply ", "Apex Retreat – (winter) The Apex retreat is all about the discovery of a person’s life-contribution. Christians in the mid-game of their life journey often begin to look for ways to live a life of significance and impact. The Apex retreat is a two-day discovery process that helps Christ-followers develop a decision making grid that gives them greater focus, helping them clarify their unique and ultimate contribution to God’s Kingdom. The Apex retreat also serves as way take the first steps to apply Becoming the Person God Created You to Be (PL 2).", "Resonance Retreat – (spring) The Resonance retreat is about the end-game and the call to finish well in life. Resonance is a personal development discovery process designed to help participants navigate questions related to finishing well, especially one’s legacy and influence in the end-game. It draws upon past shaping and life experiences to discern an individual’s ultimate Kingdom contribution. It seeks to address three questions: What do I have to offer? Who am I supposed to offer it to? What will live beyond my days? The Resonance retreat also serves as way take the first steps to apply Living the Life You Were Meant to Live (PL 3).", "Remembering Your Story (Life Map Timeline Seminar) – (fall, spring)  Used in conjunction with the Purposeful Living courses, Life Map Timeline is a discovery process that helps you reflect on your own life story. Life mapping offers you the chance to gain perspective on where God has been in the midst of the good experiences and the hard experiences, and where God has provided daily bread in a number of ways along your journey. Life mapping will also provide a chance to look at where God might be using your unique story and gifts to further his mission to the world around you.", "Hope@Work Community Nights – (fall, winter, spring) Hope@Work Community Nights are a place to build community and network with other professionals. It is also an opportunity to explore the ways that faith and work intersect and connect."],
        "schedule": "(year round)",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Revive Serving (Young Adult Ministries)": {
        "title": "Revive Serving (Young Adult Ministries)",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/serve/",
        "shortDesc": "REVIVE offers several service opportunities throughout the year. If you are interested in becoming a part of these events and opportunities, check out Hope’s website at for more information. Search: “Revive”",
        "longDesc": [],
        "schedule": "",
        "beginAge": 16,
        "endAge": 39,
        "gender": "either"
      },
      "Married People Night Outs & Retreats": {
        "title": "Married People Night Outs & Retreats",
        "url": "",
        "shortDesc": "MarriedPeople Night Out is exactly that – a night out for all couples, no matter where they are in their marriage or faith! There will be dinner, lots of laughter, games, a message and more. Join us as we live the dream that God has for our marriages!",
        "longDesc": [],
        "schedule": "",
        "beginAge": 18,
        "endAge": 99,
        "gender": "either"
      },
      "Pre-Marriage Course": {
        "title": "Pre-Marriage Course",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/calendar/eid/41556b7181d5cf37/west-des-moines/pre-marriage-class/",
        "shortDesc": "Couples will explore the amazing gift of each other while they come to understand that marriage is a wonderful and sacred gift from God. The goal of this class is to give couples the tools to lay a solid foundation for building a successful marriage.",
        "longDesc": [],
        "schedule": "",
        "beginAge": 18,
        "endAge": 99,
        "gender": "either"
      },
      "Alpha Marriage Course": {
        "title": "Alpha Marriage Course",
        "url": "",
        "shortDesc": "The Alpha Marriage Course is a series of seven sessions, designed to help couples invest in their relationship and build a strong marriage. A strong, loving and lifelong relationship doesn’t happen by chance. It takes effort and dedication to keep the fun and romance alive. In this course we will learn how to make even the happiest marriage better!",
        "longDesc": [],
        "schedule": "(fall, winter)",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Hope Parenting Conference": {
        "title": "Hope Parenting Conference",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/connect/by-interest/parenting/",
        "shortDesc": "All parents are invited to be encouraged and equipped through with dynamic keynote speakers and breakout sessions! Topics include parenting proactively, behavior challenges, talking to your kids about hard things, peer influence, and more. Breakout sessions will include a focus on challenges in different age groups as well as marriage and parenting, single parents, stepparents and adoption.",
        "longDesc": [],
        "schedule": "(fall)",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Daniel Plan": {
        "title": "Daniel Plan",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/connect/by-interest/health--wellness/",
        "shortDesc": "The Daniel Plan is an approach to achieving a healthy lifestyle that is both transformational and sustainable, centered on five essentials that will guarantee your success: faith, food, fitness, focus and friends. This six-week DVD-based class also includes teaching from Hope staff for real-life application and success.",
        "longDesc": [],
        "schedule": "(fall, spring)",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Fitness Classes": {
        "title": "Fitness Classes",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/connect/by-interest/health--wellness/",
        "shortDesc": "Click the MORE button to see opportunities below.",
        "longDesc": ["Christian Yoga – (winter, spring, summer) Join us for traditional yoga done with the heart’s focus on Jesus Christ. Each gathering is an invitation to connect our minds, bodies and spirits in Jesus. In addition to exploring bodily yoga postures, we will connect through the Scriptures and other Christian writings and teachings. Participants of all skill levels are welcome. Bring a yoga mat, large towel, journal and pen. If you have any pre-existing conditions that may impact your ability to participate, please consult a doctor. Christian Yoga meets Fridays, 9:30-10:30 am.", "Running Group – (spring, summer, fall) Join Hope’s Running Group for a three- to five-mile route for all levels of runners and walkers. Start with stretching and prayer and then go at your own pace. Meet outside the Chapel entrance where we’ll head south to the Jordan Creek Trail. Bring your friends! The Running Group meets Saturdays, 8:15-10:00 am.", "Essentrics – Release & Restore Workout – (winter, spring, summer) Essentrics is a slow and gentle, full-body stretch and strengthening workout that focuses on increasing mobility, flexibility and joint stiffness. Essentrics reawakens the power of your 650 muscles while slowly building strength in your body. This workout is for men and women of all ages who are looking for a gentle, slow tempo class. Essentrics meets Saturdays, 7:45-9:00 am"],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Healthy Living": {
        "title": "Healthy Living – Lifestyle, Fitness, and Sports Classes and Events",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/connect/by-interest/health--wellness/",
        "shortDesc": "Click the MORE button to see opportunities below.",
        "longDesc": ["Pickleball – (ongoing) Pickleball is a paddle sport that combines many elements of tennis, badminton and table tennis. All are welcome! Pickleball meets Mondays and Fridays 1:00-3:00 pm.", "Taste of Hope Golf Outing – (summer – during Taste of Hope) Join us for a four-person shotgun-start scramble golf outing at Beaver Creek Golf Course. Sign up yourself or a team of four! Cost is $65 per person, or $240 per team, and includes 18 holes, cart, lunch and pin prizes."],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      },
      "Serving Inside Hope: Volunteer Opportunities": {
        "title": "Serving Inside Hope: Volunteer Opportunities",
        "url": "http://www.lutheranchurchofhope.org/west-des-moines/serve/",
        "shortDesc": "Click the MORE button to see opportunities below.",
        "longDesc": ["Serving at Hope – As followers of Jesus, we are called to serve! And, Hope offers many ways to do this within our church walls. All of Hope’s ministries depend on volunteers – hundreds each week, in fact! So, take a look at our volunteer calendar – you can filter your search by campus, ministry and date – and find a place to plug in today! Check out Hope’s website under “Hope/Serve/Volunteer Signup” for more information.", "Serving in Hospitality at Hope – Why is hospitality so important? The answer is pretty simple … it’s biblical! Jesus calls us to be hospitable to all – friends and strangers alike. In an effort to achieve this, we set the goal to be the most welcoming church to all who enter! … and that starts with a friendly smile in the parking lot, and a warm welcome the moment they walk in the door. Check out Hope’s website under “Serve/At Hope/Hospitality” for more information.", "Family Serving Opportunities – Hospitality is important at Hope! We strive to welcome families starting with a smile in the parking lot to the moment they sit down in their seat. There are several easy ways for families to serve together on weekends, and we want to encourage you to sign up! If you’d like to sign up as a family, check out Hope’s website at “Home /Youth/Family Serving Opportunities.”"],
        "schedule": "",
        "beginAge": 0,
        "endAge": 99,
        "gender": "either"
      }
    }
  };

const categoryJSON =
  {
    "categories": {
      "A": {
        "category": "Taking the First Step in Faith",
        "classes": ["Worshiping Together", "Alpha", "Revive (Young Adult Ministries)"]
      },
      "B": {
        "category": "Pursuing Wholeness and Healing",
        "classes": ["Opportunities to Receive Prayer", "Inner Healing Prayer", "Recovery Ministries", "Support Ministries", "Financial Peace University"]
      },
      "C": {
        "category": "Building a Solid Foundation",
        "classes": ["Worshiping Together", "CORE Series", "Apprentice Series"]
      },
      "D": {
        "category": "Getting into Community",
        "classes": ["Life Groups", "Mens Ministries", "Womens Ministries", "Fifties Plus Ministries", "Revive Community (Young Adult)"]
      },
      "E": {
        "category": "Learning How to Pray",
        "classes": ["Let Prayer Change Your Life", "School for Listening Prayer", "Prayer Ministry Training"]
      },
      "F": {
        "category": "Getting to Know the Bible",
        "classes": ["Discovering Gods Story: Biblical Survey", "Books and Topics of the Bible"]
      },
      "G": {
        "category": "Discovering God’s Will",
        "classes": ["Purposeful Living Series", "Building a Life Map Timeline", "Revive (Young Adult Ministries)"]
      },
      "H": {
        "category": "Living a Life that Matters",
        "classes": ["Mission Opportunities, Local and Global", "Equip", "EQUIP - Other Leadership Development Opportunities", "Revive Serving (Young Adult Ministries)", "Serving Inside Hope: Volunteer Opportunities"]
      },
      "I": {
        "category": "Marriage and Parenting",
        "classes": ["Married People Night Outs & Retreats", "Pre-Marriage Course", "Alpha Marriage Course", "Hope Parenting Conference", "Mens Ministries", "Womens Ministries"]
      },
      "J": {
        "category": "Pursuing Healthy Lifestyle",
        "classes": ["Financial Peace University", "Daniel Plan", "Healthy Living", "Fitness Classes"]
      }
    }
  };
export {categoryJSON, questionJSON, classesJSON};