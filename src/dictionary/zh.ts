const zh = {
  __identity: "中文",
  __langKey: 'zh',
  name: "林 涅",
  blog: "我的博客",
  degree: "本科生 (大四)",
  major: "计算机 软件工程专业 (GPA: 3.6+    排名: 専攻 第 1名)",
  academy: "电智化学院, 东莞理工",
  department: "电子工程系, 清华大学",
  researchStudent: "(项目研究员)",
  personalIntroduction: `Hi，我是林涅，是一名来自中国的大学生。我现在就读于中国广东省东莞市的东莞理工
  大学，专业是计算机软件工程专业。同时我也是中国计算机协会(CCF)、中国图像图形学学会(CSIG)等组织会员，`,
  address1:
    "地址1: 中国广东省东莞市松山湖东莞理工9A-411 Ai-Net智能化研究所",
  address2:
    "地址2: 中国北京市海淀区清华大学罗姆楼 信息系统研究所",
  email: "个人邮箱: nie.lin@hotmail.com",
  phone: "个人电话: +86 131-3835-0137",
  web: "个人网站: linnie.com.cn",
  newTitle: "新闻",
  navigation: {
    name: "林涅",
    address: [
      "主页",
      "新闻",
      "个人经历",
      "国际交流",
      "研究兴趣",
      "荣誉奖项",
      "会议论文",
      "期刊论文",
      "发表专利",
      "软件著作",
      "项目经验",
      "参与基金"
    ]
  },
  news: {
    new1: `[ 2021.06 ] Our team (I and Fixstars) implemented the 4-bit PQ algorithm on ARM for the faiss library, enabling 60x speedup. [<a href="https://github.com/facebookresearch/faiss/issues/1812">issue</a>] [<a href="https://github.com/facebookresearch/faiss/pull/1815">PR</a>] [<a href="https://proc-cpuinfo.fixstars.com/2021/06/make-faiss-4bitpq-60x-faster-on-aarch64/">blog by Imaizumi (in Japanese)</a>] [<a href="https://mti-lab.github.io/blog/yusuke%20matsui/research/2021/06/21/4bitpq.html">blog by Matsui (in Japanese)</a>]`,
    new2: `[ 2021.05 ] I was selected as <a href="http://cvpr2021.thecvf.com/node/184">an outstanding reviewer for CVPR 2021</a>.`,
    new3: `[ 2021.01 ] Updated: <a href="project/position/position.html">For prospective students</a>.`,
  },
  biographyTitle: "个人经历",
  biography: {
    bio1: {
      introduce: "(2020-至今)  项目组研究员",
      brief1: "电子工程系 信息系统研究所",
      brief2: "清华大学",
    },
    bio2: {
      introduce: "(2018-至今)  计算机 软件工程在读",
      brief1: "电子工程与智能化学院 Ai-Net研究所",
      brief2: "东莞理工大学",
    },
  },
  exchangeTitle: "国际交流",
  exchange: [
    {
      imgName: "清华大学",
      intro: `sdas<br> <p style="font-size: 40px">清华大学</p>`
    },
    {
      imgName: "新加坡国立大学",
      intro: "NUS介绍"
    },
    {
      imgName: "多伦多大学",
      intro: "加拿大多伦多大学介绍介绍"
    },
    {
      imgName: "香港科技大学",
      intro: "香港科技大学介绍"
    },
  ],
  researchTitle: "研究兴趣",
  researchInterest: [
    "机器视觉",
    "● xxxxxxxxxxxxxxxxx",
    "● xxxxxxxxxxxxxxxxxxxxxxxx",
    "● xxxxxxxxxxxxxxx",
  ],
  awardsTitle: "荣誉奖项",
  awards: [
    {
      subtitle: "Competetion Awards",
      content: [
        "Mathematical Contest In Modeling(MCM/ICM 2020)The International Second Prize",
        "Big Data & Computing Intelligence Contest(CCF BDCI)The Honourable Mentions(Rank 13/2207)",
        "Electronic Design Competition The Third Prize",
      ],
    },
    {
      subtitle: "Honors Awards",
      content: [
        "National University of Singapore's Excellent Award",
        "National Paten(Submitted)",
        "The First Prize Scholarship",
        "The Gao Weiguang Scholarship",
        "Outstanding Volunteer of Huawei",
      ],
    },
  ],
  conferenceTitle: "会议论文",
  conferencePublication: [
    {
      name: `Dilated Residual Shrinkage Network for SAR Image Despeckling`,
      author: `<a href="#">Nie Lin</a>, Gao Chen, Qingfeng Zhou, Chanzi Liu`,
      date: "IEEE International Conference on Signal and Image Processing (ICSIP),2021",
    },
  ],

  journalTitle: "期刊论文",
  journalPublication: [
    {
      name: '暂无',
      //name: `XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`,
      //author: `xxxxx,xxx,<strong>Nie Lin</strong>,xxxxxx,xxx`,
      //date: `IEEE Transactions on Multimedia(<strong>TMM</strong>),2018`,
    },
  ],
  patentTitle: "发表专利",
  patent: [
    {
      name: `Automobile rain-shielding device based on analog signal processing and automobile with the device`,
      author: `<a href="#">Nie Lin</a>, Chanzhi Liu`,
      number: `CN 202022246705.5`,
    },
  ],
  copyrghtTitle: "软件著作",
  softwareCopyrght: [
    {
      name: '暂无',
      //name: `No.6578941357 in Software Copyrght: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`,
      //author: `<a href="">Nie Lin</a>, Ye Ding`,
    },
  ],

}

export type zhType = typeof zh;

export default zh;