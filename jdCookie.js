/*
此文件为Node.js专用。其他用户请忽略
 */
//此处填写京东账号cookie。
//注：github action用户cookie填写到Settings-Secrets里面，新增JD_COOKIE，多个账号的cookie使用`&`隔开或者换行
let CookieJDs = [
  '__jda=122270672.1602569615806343446087.1602569616.1608429807.1609602754.21; shshshfp=83b81cfc3267b02f47d31e57cfef47fc; shshshfpa=24439f99-e0c3-b940-13d3-9435d00320dd-1602569617; shshshfpb=k6CFcBTPA3mGSrcFZUCLT9A%3D%3D; TrackID=1vZ8eyzMs4kidc1PPIHJZzVC43SyxZHTd6TfHLCN6Dxa9zzRECJlI3evxeOouxGtGeGKhEeNnMTQG_OqJUDFcs5qe_EQxzpwKf7oD5Uf9F2rr5kg9RUrR5QWNa1P2jvjDcPq1IzrN2GDxuNQutnn7Tg; pinId=x9Oidpup5nzj-N-vrnJcmbV9-x-f3wj7; unpl=V2_ZzNtbRcHQUUlC0MBLhsLB2JQEA9LU0UQJ1xHBy9NDgRkBxtYclRCFnQURldnGl0UZwIZXEBcQBBFCEdkfxlZDWEzIm1BV3MURQhBVXgdWw1gAxZUQ1BBEHcNQ1N6EFo1VwMaWXJXQhR0CENTehtYAmYzTwMFAwFGIlcTC0sbVAZgAxJcRFJzFEUJdgIVGV0EZgITXUFSQVh1D0dXfx5UAmcHG1xFVUYXcA1BVXIfbARXAA%3d%3d; ipLoc-djd=21-1845-1846-0; __jdv=122270672|kong|t_51497_|tuiguang|da3aa24dd3f34b3c8574ce0beec02584|1608429806731; __jdb=122270672.6.1602569615806343446087|21.1609602754; __jdc=122270672; PCSYCityID=CN_360000_360400_360404; shshshsID=7773364c3e308f6fd7e47555353e3d9a_2_1609602772759; wlfstk_smdl=9371x6l5ka2rk5e0e5rgup0i2ydvk48t; 3AB9D23F7A4B3C9B=JVBNHUU33ZEVCO5JA4L545EAEID4QHS76EIG26AXAPLODBXV5PUUT7Q6NU3TLHQJRXZ5Z6JQY7LW6EV4I2MFT36GQQ; thor=C6DC4B5FA179CF5AA55244A24D1A9BB8DAAB5B19CC81160A226A820CA671501A601578C5051935E5909BF08AFE06DF64BF05E59BC82527E0E46CFB3BCF6B4EA4296C0C0996AD9812DE5A6C5481273FD225B16AD40E852A3B3B8010492900DADE53CC313B42943EA324DFCE303D2C3E958DA84C4CD32DBFE9A3FEB296157CFDFDD141BF7058D34F6EF7A298D43B008D6080B0A73A88E1331C4AAACC17F72ABC2E; pin=jd_7cf4356d58bf7; unick=%E5%8F%B8%E5%A4%8F%E8%8F%8C; ceshi3.com=201; _tp=UntLfbqJajOa9nALdAQHxr8tZsYpmjUG9tn3E1200jg%3D; _pst=jd_7cf4356d58bf7; areaId=21',//账号一ck,例:pt_key=XXX;pt_pin=XXX;
  '',//账号二ck,例:pt_key=XXX;pt_pin=XXX;如有更多,依次类推
]
// 判断github action里面是否有京东ck
if (process.env.JD_COOKIE) {
  if (process.env.JD_COOKIE.indexOf('&') > -1) {
    console.log(`您的cookie选择的是用&隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('&');
  } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
    console.log(`您的cookie选择的是用换行隔开\n`)
    CookieJDs = process.env.JD_COOKIE.split('\n');
  } else if (process.env.JD_COOKIE.indexOf('\\n') > -1) {
    //环境变量兼容腾讯云和docker下\n会被转义成\\n
    console.log(`您的cookie选择的是用换行隔开\\n`)
    CookieJDs = process.env.JD_COOKIE.split('\\n');
  } else {
    CookieJDs = [process.env.JD_COOKIE];
  }
  CookieJDs = [...new Set(CookieJDs)]
  console.log(`\n====================共有${CookieJDs.length}个京东账号Cookie=========\n`);
  console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString()}=====================\n`)
  // console.log(`\n==================脚本执行来自 github action=====================\n`)
}
for (let i = 0; i < CookieJDs.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['CookieJD' + index] = CookieJDs[i];
}
