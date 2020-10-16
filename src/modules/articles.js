import axios from "axios";

const Articles = {
  async create(props) {
    let headers = JSON.parse(localStorage.getItem("J-tockAuth-Storage"));

    try {
      let result = await axios.post(
        "/admin/articles",
        {
          article: {
            title: props.title,
            teaser: props.teaser,
            content: props.content,
            category: props.selectedCategory,
          },
        },
        {
          headers: {
            ...headers,
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );
      document.getElementById("create-article").reset();

      return result.data.message;
    } catch (error) {
      return error.response.data.message;
    }
  },
};
export default Articles;
