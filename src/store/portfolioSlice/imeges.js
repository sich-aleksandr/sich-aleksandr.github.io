import first from "./images/1.jpg";
import dog from "./images/26.jpg";

export const portfolio = {
  tasks: [
    {
      id: 1,
      title: "title",
      photo: first,
      tags: ["Люди"],
      isDone: true,
      size: 'large',
    },
    { id: 2, title: "title", photo: dog, tags: ["Животные"], isDone: false, size: 'medium', },
    { id: 3, title: "title", photo: dog, tags: ["Животные"], isDone: false, size: 'large',  },
    { id: 4, title: "title", photo: dog, tags: ["Животные"], isDone: false, size: 'small',  },
    { id: 5, title: "title", photo: dog, tags: ["Животные"], isDone: false, size: 'small',  },
    { id: 6, title: "title", photo: dog, tags: ["Люди"], isDone: true, size: 'small',  },
    { id: 7, title: "title", photo: dog, tags: ["Люди"], isDone: true, size: 'small',  },
  ],
};
