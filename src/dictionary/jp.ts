const jp = {
  __identity: "日本語",
  __langKey: 'jp',
  name: "リン ネエ",
  blog: "私のブログ",
  degree: "学部学生 (B3)",
  major: "コンピューター ソフトウェア工学 (GPA: 3.6+ 排列: 専攻 No.1)",
  academy: "電子情報&人工知能学院, DGUT",
  department: "電子工学科, 清華大学",
  researchStudent: "(プロジェクト研究员)",
  personalIntroduction: `Hi，我是林涅，是一名来自中国的大学生。我现在就读于中国广东省东莞市的东莞理工
  大学，专业是计算机软件工程专业。同时我也是中国计算机协会(CCF)、中国图像图形学学会(CSIG)等组织会员，`,
  address1:
      "アドレス1: 中国広東省東莞市 DGUT-9A411 Ai-Net電子情報&人工知能研究所",
  address2:
      "アドレス2: 中国北京市海淀区 清華大学-ロム楼 電子情報システム研究所",
  email: "メアド: nie.lin@hotmail.com",
  phone: "電話番号: +86 131-3835-0137",
  web: "ホームページ: linnie.com.cn",
  newTitle: "ニュース",
  navigation: {
    name: "リン ネエ",
    address: [
      "ホームページ",
      "ニュース",
      "バイオグラフィー",
      "国際交流",
      "研究興味",
      "栄誉受賞",
      "会議論文",
      "ジャーナル論文",
      "発明特许",
      "ソフトウエア著作権",
      "プロジェクト",
      "ファンド"
    ]
  },
  news: {
    new1: `[ 2021.06 ] Our team (I and Fixstars) implemented the 4-bit PQ algorithm on ARM for the faiss library, enabling 60x speedup. [<a href="https://github.com/facebookresearch/faiss/issues/1812">issue</a>] [<a href="https://github.com/facebookresearch/faiss/pull/1815">PR</a>] [<a href="https://proc-cpuinfo.fixstars.com/2021/06/make-faiss-4bitpq-60x-faster-on-aarch64/">blog by Imaizumi (in Japanese)</a>] [<a href="https://mti-lab.github.io/blog/yusuke%20matsui/research/2021/06/21/4bitpq.html">blog by Matsui (in Japanese)</a>]`,
    new2: `[ 2021.05 ] I was selected as <a href="http://cvpr2021.thecvf.com/node/184">an outstanding reviewer for CVPR 2021</a>.`,
    new3: `[ 2021.01 ] Updated: <a href="project/position/position.html">For prospective students</a>.`,
  },
  biographyTitle: "バイオグラフィー",
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
  exchangeTitle: "国際交流",
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
}

export  type jpType = typeof jp;

export default jp;