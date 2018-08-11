
const questionJSON1 =
  {"questions":[
      {"text":"I’m looking for a group of Christian friends to connect with.", "categories":["D"]},
      {"text":"Right now life is a bit challenging for me.", "categories":["B"]},
      {"text":"I’m not sure who Jesus is and what I believe about him.", "categories":["A"]},
      {"text":"I often find Bible reading to be a challenge.", "categories":["C"]},
      {"text":"I have difficulty experience God as loving and compassionate.", "categories":["C", "B"]},
      {"text":"I’m not quite sure how to talk to God.", "categories":["A,  E"]},
      {"text":"I would really like to get my finances under control.", "categories":["J"]},
      {"text":"I would like to know how invent more in my spouse.", "categories":["I"]},
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

const categoryJSON =
  {
    "categories": {
      "A": {
        "category": "Taking the First Step in Faith",
        "classes": [
          {"title": "Worshiping Together", "url": "http://hopewdm.org", "shortDesc": "Come to church!", "longDesc":[""], "schedule":"Weekly"},
          {"title": "Alpha", "url": "http://hopewdm.org", "desc": "If you are \"new\" to Christianity, or are a seasoned Christian wanting to brush up on the basics, we suggest Alpha as a great way to get connected and grow! Through the years, thousands of people have participated in Alpha here at Hope.", "longDesc":[""], "schedule":"Sessions offered through year"},
          {"title": "Revive (Young Adult Ministries)", "url": "http://hopewdm.org", "shortDesc": "This casual, come-as-you-are worship service for young adults (college-age and those in their 20s & 30s) is a great way to worship through music, God’s word and a message. The worship is intimate and Spirit-led, and the messages are specific to young adult life. All young adults welcome!", "longDesc":[""], "schedule":"Thursdays, 7:00-8:15 pm"}]
      },
      "B": {
        "category": "Pursuing Wholeness and Healing",
        "classes": [
          {"title": "Opportunities to Receive Prayer", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Inner Healing Prayer", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Recovery Ministries", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Support Ministries", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Financial Peace University", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""}]
      },
      "C": {
        "category": "Building a Solid Foundation",
        "classes": [
          {"title": "Worshipping Together", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "CORE Series", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Apprentice Series", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""}]
      },
      "D": {
        "category": "Getting into Community",
        "classes": [
          {"title": "Life Groups", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Men’s and Women’s Ministries", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Fifties Plus Ministries", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Revive Community (Young Adult)", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""}]
      },
      "E": {
        "category": "Learning How to Pray",
        "classes": [
          {"title": "Let Prayer Change Your Life", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "School for Listening Prayer", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Prayer Ministry Training", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""}]
      },
      "F": {
        "category": "Getting to Know the Bible",
        "classes": [
          {"title": "Discovering God’s Story", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": " Biblical Survey", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Bible Study Tools", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Studying Books of the Bible", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""}]
      },
      "G": {
        "category": "Discovering God’s Will",
        "classes": [
          {"title": "Purposeful Living Series", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Life Discernment Seminars", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Building a Life Map Timeline", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Revive (Young Adult Ministries)", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""}]
      },
      "H": {
        "category": "Living a Life that Matters",
        "classes": [
          {"title": "Mission Opportunities, Local and Global", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Leadership in and outside of Church", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Volunteering in and outside of Church", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Equip", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Revive Serving (Young Adult Ministries)", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""}]
      },
      "I": {
        "category": "Marriage and Parenting",
        "classes": [
          {"title": "Married People Night Outs & Retreats", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Pre-Marriage Course", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Alpha Marriage Course", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Parenting Courses", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Men’s and Women’s Ministries", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""}]
      },
      "J": {
        "category": "Pursuing Healthy Lifestyle",
        "classes": [
          {"title": "Financial Peace University", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Daniel Plan (Course)", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Fitness Classes", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""},
          {"title": "Sports and Fitness Classes and Events", "url": "http://hopewdm.org", "shortDesc": "", "longDesc":[""], "schedule":""}]
      }
    }
  };
export {categoryJSON, questionJSON1};