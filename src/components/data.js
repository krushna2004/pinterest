
// data.js
const categories = [
    { id: 1, name: "Food" },
    { id: 2, name: "Fashion" },
    { id: 3, name: "Traditions" },
    { id: 4, name: "Festivals"},
    {id: 5, name: "K-POP"},
    {id: 6, name: "Hairstyle"},
    {id: 7, name: "Clothing"},
    {id: 8, name: " Beauty"},
    {id: 9, name: "Street"},
    {id: 10, name: "Kdrama"},
  ];
  
  const images = [
    { id: 1, category: 1, url: "./pic/f1.jpg" },
    { id: 2, category: 1, url: "./pic/f2.jpg" },
    { id: 3, category: 1, url: "./pic/f13.jpg" },
    { id: 4, category: 1, url: "./pic/f4.jpg" },
    { id: 5, category: 1, url: "./pic/f5.jpg" },
    { id: 6, category: 1, url: "./pic/f6.jpg" },
    { id: 7, category: 1, url: "./pic/f14.jpg" },
    { id: 8, category: 1, url: "./pic/f8.jpg" },
    { id: 9, category: 1, url: "./pic/f9.jpg" },
    { id: 10, category: 1, url: "./pic/f10.jpg" },
    { id: 11, category: 1, url: "./pic/f11.jpg" },
    { id: 12, category: 1, url: "./pic/f12.jpg" },
    { id: 13, category: 1, url: "./pic/f14.jpg" },
    { id: 14, category: 1, url: "./pic/f3.jpg" },
    { id: 15, category: 1, url: "./pic/f15.jpg" },


    { id: 16, category: 2, url: "./pic/d4.jpg" },
    { id: 17, category: 2, url: "./pic/d5.jpg" },
    { id: 18, category: 2, url: "./pic/d6.jpg" },
    { id: 19, category: 2, url: "./pic/d7.jpg" },
    { id: 20, category: 2, url: "./pic/d8.jpg" },
    { id: 21, category: 2, url: "./pic/d9.jpg" },
    { id: 22, category: 2, url: "./pic/d10.jpg" },
    { id: 23, category: 2, url: "./pic/d11.jpg" },
    { id: 24, category: 2, url: "./pic/d12.jpg" },
    { id: 25, category: 2, url: "./pic/d1.jpg" },
    { id: 26, category: 2, url: "./pic/d2.jpg" },
    { id: 27, category: 2, url: "./pic/d3.jpg" },
    { id: 28, category: 2, url: "./pic/d14.jpg" },
    { id: 29, category: 2, url: "./pic/d13.jpg" },
    { id: 30, category: 2, url: "./pic/d15.jpg" },

    { id: 31, category: 3, url: "./pic/t1.jpg" },
    { id: 32, category: 3, url: "./pic/t2.jpg" },
    { id: 33, category: 3, url: "./pic/t3.jpg" },
    { id: 34, category: 3, url: "./pic/t4.jpg" },
    { id: 35, category: 3, url: "./pic/t5.jpg" },
    { id: 36, category: 3, url: "./pic/t6.jpg" },
    { id: 37, category: 3, url: "./pic/t7.jpg" },
    { id: 38, category: 3, url: "./pic/t8.jpg" },
    { id: 39, category: 3, url: "./pic/t9.jpg" },
    { id: 40, category: 3, url: "./pic/t10.jpg" },
    { id: 41, category: 3, url: "./pic/t11.jpg" },
    { id: 42, category: 3, url: "./pic/t12.jpg" },
    { id: 43, category: 3, url: "./pic/t12.jpg" },

    { id: 44, category: 4, url: "./pic/fe1.jpg" },
    { id: 45, category: 4, url: "./pic/fe2.jpg" },
    { id: 46, category: 4, url: "./pic/fe3.jpg" },
    { id: 47, category: 4, url: "./pic/fe4.jpg" },
    { id: 48, category: 4, url: "./pic/fe5.jpg" },
    { id: 49, category: 4, url: "./pic/fe6.jpg" },
    { id: 50, category: 4, url: "./pic/fe7.jpg" },
    { id: 51, category: 4, url: "./pic/fe8.jpg" },
    { id: 52, category: 4, url: "./pic/fe9.jpg" },
    { id: 53, category: 4, url: "./pic/fe10.jpg" },
    
    { id: 54, category: 5, url: "./pic/k1.jpg" },
    { id: 55, category: 5, url: "./pic/k2.jpg" },
    { id: 56, category: 5, url: "./pic/k3.jpg" },
    { id: 57, category: 5, url: "./pic/k4.jpg" },
    { id: 58, category: 5, url: "./pic/k5.jpg" },
    { id: 59, category: 5, url: "./pic/k6.jpg" },
    { id: 60, category: 5, url: "./pic/k7.jpg" },
    { id: 61, category: 5, url: "./pic/k8.jpg" },
    { id: 62, category: 5, url: "./pic/k9.jpg" },
    { id: 63, category: 5, url: "./pic/k10.jpg" },

    { id: 64, category: 6, url: "./pic/h4.jpg" },
    { id: 65, category: 6, url: "./pic/h5.jpg" },
    { id: 66, category: 6, url: "./pic/h6.jpg" },
    { id: 67, category: 6, url: "./pic/h7.jpg" },
    { id: 68, category: 6, url: "./pic/h8.jpg" },
    { id: 69, category: 6, url: "./pic/h9.jpg" },
    { id: 70, category: 6, url: "./pic/h10.jpg" },
    { id: 71, category: 6, url: "./pic/h1.jpg" },
    { id: 72, category: 6, url: "./pic/h2.jpg" },
    { id: 73, category: 6, url: "./pic/h3.jpg" },

    { id: 74, category: 7, url: "./pic/c1.jpg" },
    { id: 75, category: 7, url: "./pic/c2.jpg" },
    { id: 76, category: 7, url: "./pic/c10.jpg" },
    { id: 77, category: 7, url: "./pic/c7.jpg" },
    { id: 78, category: 7, url: "./pic/c5.jpg" },
    { id: 79, category: 7, url: "./pic/c6.jpg" },
    { id: 80, category: 7, url: "./pic/c3.jpg" },
    { id: 81, category: 7, url: "./pic/c4.jpg" },
    { id: 82, category: 7, url: "./pic/c9.jpg" },
    { id: 83, category: 7, url: "./pic/c11.jpg" },
    { id: 84, category: 7, url: "./pic/c12.jpg" },
    { id: 85, category: 7, url: "./pic/c8.jpg" },

    { id: 86, category: 8, url: "./pic/b1.jpg" },
    { id: 87, category: 8, url: "./pic/b2.jpg" },
    { id: 88, category: 8, url: "./pic/b3.jpg" },
    { id: 89, category: 8, url: "./pic/b6.jpg" },
    { id: 90, category: 8, url: "./pic/b7.jpg" },
    { id: 91, category: 8, url: "./pic/b8.jpg" },
    { id: 92, category: 8, url: "./pic/b4.jpg" },
    { id: 93, category: 8, url: "./pic/b5.jpg" },
    { id: 94, category: 8, url: "./pic/b9.jpg" },
    { id: 95, category: 8, url: "./pic/b10.jpg" },

    { id: 96, category: 9, url: "./pic/s1.jpg" },
    { id: 97, category: 9, url: "./pic/s2.jpg" },
    { id: 98, category: 9, url: "./pic/s3.jpg" },
    { id: 99, category: 9, url: "./pic/s6.jpg" },
    { id: 100, category: 9, url: "./pic/s7.jpg" },
    { id: 101, category: 9, url: "./pic/s8.jpg" },
    { id: 102, category: 9, url: "./pic/s10.jpg" },
    { id: 103, category: 9, url: "./pic/s9.jpg" },
    { id: 104, category: 9, url: "./pic/s4.jpg" },
    { id: 105, category: 9, url: "./pic/s5.jpg" },

    { id: 106, category: 10, url: "./pic/kd1.jpg" },
    { id: 107, category: 10, url: "./pic/kd2.jpg" },
    { id: 108, category: 10, url: "./pic/kd3.jpg" },
    { id: 109, category: 10, url: "./pic/kd4.jpg" },
    { id: 110, category: 10, url: "./pic/kd5.jpg" },
    { id: 111, category: 10, url: "./pic/kd6.jpg" },
    { id: 112, category: 10, url: "./pic/kd7.jpg" },
    { id: 113, category: 10, url: "./pic/kd8.jpg" },
    { id: 114, category: 10, url: "./pic/kd9.jpg" },
    { id: 115, category: 10, url: "./pic/kd10.jpg" },
    { id: 116, category: 10, url: "./pic/kd11.jpg" },
    { id: 117, category: 10, url: "./pic/kd12.jpg" },
    { id: 118, category: 10, url: "./pic/kd13.jpg" },
    { id: 119, category: 10, url: "./pic/kd14.jpg" },

    
    


















    

  ];
  
  export { categories, images };
  