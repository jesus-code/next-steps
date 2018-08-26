
const questionJSON =
  {"questions":[
      {"text":"I’m looking for a group of Christian friends to connect with.", "categories":["D"]},
      {"text":"Right now life is a bit challenging for me.", "categories":["B"]},
      {"text":"I’m not sure who Jesus is and what I believe about him.", "categories":["A"]},
      {"text":"I often find Bible reading to be a challenge.", "categories":["C"]},
      {"text":"I have difficulty experience God as loving and compassionate.", "categories":["C", "B"]},
      {"text":"I’m not quite sure how to talk to God.", "categories":["A", "E"]},
      {"text":"I would really like to get my finances under control.", "categories":["J"]},
      {"text":"I would like to know how invest more in my spouse.", "categories":["I"]},
      {"text":"I’m often unclear about what God is trying to teach me.", "categories":["C", "F", "G"]},
      {"text":"I would be interested in a refresher course on Christianity.", "categories":["A"]},
      {"text":"I would really like to see my marriage go from good to great.", "categories":["I"]},
      {"text":"I’m interested in what you have for Young Adults.", "categories":["D"]},
      {"text":"I’m looking for volunteer opportunities at church.", "categories":["H"]},
      {"text":"I’m having a hard time freeing myself from the pain of my past.", "categories":["E", "B"]},
      {"text":"I really enjoy reading the Bible and applying it to my life.", "categories":["F"]},
      {"text":"I clearly understand what it means to follow Jesus in everyday life.", "categories":["C", "G"]},
      {"text":"I’m looking for a group or men/women to connect with.", "categories":["D", "H"]},
      {"text":"My spouse and I would really use some “us” time.", "categories":["I"]},
      {"text":"I’m interested in sports and fitness opportunities.", "categories":["J"]},
      {"text":"I would like to become part of Hope’s prayer ministry.", "categories":["E"]},
      {"text":"I would like to understand the Bible better.", "categories":["F"]},
      {"text":"I’m seeking a group of people who want to make a difference.", "categories":["D", "H"]},
      {"text":"I’d like to give more, but my finances are tight.", "categories":["J"]},
      {"text":"I’m struggling with some habits I’d like to overcome.", "categories":["B"]},
      {"text":"I would like to hear God’s voice more clearly", "categories":["E"]},
      {"text":"I want to see God's plan for my life become a reality.", "categories":["G"]},
      {"text":"I am unclear on how God wants to use me to serve and impact others.", "categories":["G", "H"]},
      {"text":"I would like to know how to invest more in my kids.", "categories":["I"]},
      {"text":"Reading the Bible can be challenging at times.", "categories":["F"]},
      {"text":"I want to make a difference as I serve and lead others in Jesus’ Name.", "categories":["H"]},
      {"text":"I’m interested in leading a healthier lifestyle.", "categories":["J"]}
    ]};

const classesJSON = 
  {
    "classes":{
      "Worshiping Together":{"title": "Worshiping Together", "url": "http://hopewdm.org", "shortDesc": "Come to church!", "longDesc":[], "schedule":"Weekly", "beginAge":0, "endAge":99, "gender":"either"},
      "Alpha":{"title": "Alpha", "url": "http://hopewdm.org", "shortDesc": "If you are \"new\" to Christianity, or are a seasoned Christian wanting to brush up on the basics, we suggest Alpha as a great way to get connected and grow! Through the years, thousands of people have participated in Alpha here at Hope.", "longDesc":[], "schedule":"Sessions offered throughout the year", "beginAge":0, "endAge":99, "gender":"either"},
      "Revive (Young Adult Ministries)":{"title": "Revive (Young Adult Ministries)", "url": "http://hopewdm.org", "shortDesc": "This casual, come-as-you-are worship service for young adults (college-age and those in their 20s & 30s) is a great way to worship through music, God’s word and a message. The worship is intimate and Spirit-led, and the messages are specific to young adult life. All young adults welcome!", "longDesc":["This is a lot more info", "You can have multiple paragraphs","By adding more items to this array"], "schedule":"Thursdays, 7:00-8:15 pm", "beginAge":16, "endAge":39, "gender":"either"},
      "Revive Community (Young Adult)":{"title": "Revive Community (Young Adult)", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Opportunities to Receive Prayer":{"title": "Opportunities to Receive Prayer", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Inner Healing Prayer":{"title": "Inner Healing Prayer", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Recovery Ministries":{"title": "Recovery Ministries", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Support Ministries":{"title": "Support Ministries", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Financial Peace University":{"title": "Financial Peace University", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "CORE Series":{"title": "CORE Series", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Apprentice Series":{"title": "Apprentice Series", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Life Groups":{"title": "Life Groups", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      /* can't have ' in name */"Mens Ministries":{"title": "Men’s Ministries", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"male"},
      /* can't have ' in name */"Womens Ministries":{"title": "Women’s Ministries", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"female"},
      "Fifties Plus Ministries":{"title": "Fifties Plus Ministries", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":50, "endAge":99, "gender":"either"},
      "Let Prayer Change Your Life":{"title": "Let Prayer Change Your Life", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "School for Listening Prayer":{"title": "School for Listening Prayer", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Prayer Ministry Training":{"title": "Prayer Ministry Training", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Discovering Gods Story":{"title": "Discovering God’s Story", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Biblical Survey":{"title": "Biblical Survey", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Bible Study Tools":{"title": "Bible Study Tools", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Studying Books of the Bible":{"title": "Studying Books of the Bible", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Purposeful Living Series":{"title": "Purposeful Living Series", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Life Discernment Seminars":{"title": "Life Discernment Seminars", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Building a Life Map Timeline":{"title": "Building a Life Map Timeline", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Mission Opportunities, Local and Global":{"title": "Mission Opportunities, Local and Global", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Leadership in and outside of Church":{"title": "Leadership in and outside of Church", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Volunteering in and outside of Church":{"title": "Volunteering in and outside of Church", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Equip":{"title": "Equip", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Revive Serving (Young Adult Ministries)":{"title": "Revive Serving (Young Adult Ministries)", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Married People Night Outs & Retreats":{"title": "Married People Night Outs & Retreats", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Pre-Marriage Course":{"title": "Pre-Marriage Course", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Alpha Marriage Course":{"title": "Alpha Marriage Course", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Parenting Courses":{"title": "Parenting Courses", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Daniel Plan (Course)":{"title": "Daniel Plan (Course)", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Fitness Classes":{"title": "Fitness Classes", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"},
      "Sports and Fitness Classes and Events":{"title": "Sports and Fitness Classes and Events", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[], "schedule":"", "beginAge":0, "endAge":99, "gender":"either"}
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
        "classes": ["Discovering Gods Story", "Biblical Survey", "Bible Study Tools", "Studying Books of the Bible"]
      },
      "G": {
        "category": "Discovering God’s Will",
        "classes": ["Purposeful Living Series", "Life Discernment Seminars", "Building a Life Map Timeline", "Revive (Young Adult Ministries)"]
      },
      "H": {
        "category": "Living a Life that Matters",
        "classes": ["Mission Opportunities, Local and Global","Leadership in and outside of Church", "Volunteering in and outside of Church", "Equip", "Revive Serving (Young Adult Ministries)"]
      },
      "I": {
        "category": "Marriage and Parenting",
        "classes": ["Married People Night Outs & Retreats", "Pre-Marriage Course", "Alpha Marriage Course", "Parenting Courses", "Mens Ministries", "Womens Ministries"]
      },
      "J": {
        "category": "Pursuing Healthy Lifestyle",
        "classes": ["Financial Peace University", "Daniel Plan (Course)", "Fitness Classes", "Sports and Fitness Classes and Events"]
      }
    }
  };
export {categoryJSON, questionJSON, classesJSON};