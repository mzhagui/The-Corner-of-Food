import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { deletePost, getAllPosts, newPost, putPost } from '../services/posts';
// import { getAllFlavors } from '../services/flavors';
import Posts from '../screens/Posts';
// import FoodCreate from '../screens/FoodCreate';
// import FoodEdit from '../screens/FoodEdit';
// import Flavors from '../screens/Flavors';
// import FoodDetail from '../screens/FoodDetail';

export default function MainContainer() {
  const [posts, setPosts] = useState([]);
  // const [flavors, setFlavors] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
    };
    fetchPosts();
  }, []);

  // useEffect(() => {
  //   const fetchFlavors = async () => {
  //     const flavorList = await getAllFlavors();
  //     setFlavors(flavorList);
  //   };
  //   fetchFlavors();
  // }, []);

  // const handleFoodCreate = async (formData) => {
  //   const newFood = await postFood(formData);
  //   setFoods((prevState) => [...prevState, newFood]);
  //   history.push('/foods');
  // };

  // const handleFoodUpdate = async (id, formData) => {
  //   const newFood = await putFood(id, formData);
  //   setFoods((prevState) =>
  //     prevState.map((food) => {
  //       return food.id === Number(id) ? newFood : food;
  //     })
  //   );
  //   history.push('/foods');
  // };

  const handlePostDelete = async (id) => {
    await deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };

  return (
    <Switch>
      {/* <Route path='/foods/:id/edit'>
        <FoodEdit foods={foods} handleFoodUpdate={handleFoodUpdate} />
      </Route>
      <Route path='/foods/new'>
        <FoodCreate handleFoodCreate={handleFoodCreate} />
      </Route>
      <Route path='/foods/:id'>
        <FoodDetail flavors={flavors} />
      </Route> */}
      <Route path='/posts'>
        <Posts posts={posts} handlePostDelete={handlePostDelete} />
      </Route>
      {/* <Route path='/flavors'>
        <Flavors flavors={flavors} />
      </Route> */}
    </Switch>
  );
}
