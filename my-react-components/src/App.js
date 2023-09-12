import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import CollapsiblePanel from './components/CollapsiblePanel';
import Counter from './components/Counter';
import FormInput from './components/FormInput';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Notification from './components/Notification';
import SortableTable from './components/SortableTable';
import Modal from './components/Modal';
import { useState } from 'react';
import Tabs from './components/Tabs';
import Carousel from './components/Carousel';
import SearchBar from './components/SearchBar';
import DatePicker from './components/DatePicker';

function App() {
    const fields = [{key: 'keys', type: 'text', name:'userName' , placeholder:'请输入xxx', submit: 'submit'}]

    const data = [  { column1: 'B', column2: 'B', column3: 'B' },
    { column1: 'A', column2: 'A', column3: 'A' },
    { column1: 'C', column2: 'C', column3: 'C' },];

    const [isModalOpen, setIsModalOpen] = useState(false)

    const tabs = [
        {
          label: '标签1',
          content: <p>标签1的内容在这里。</p>,
        },
        {
          label: '标签2',
          content: <p>标签2的内容在这里。</p>,
        },
        {
          label: '标签3',
          content: <p>标签3的内容在这里。</p>,
        },
      ];

      const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
      ];

    function closeModal(){
        setIsModalOpen(false)
    }

    function openModal(){
        setIsModalOpen(true)
    }

    const sortFunction =(a,b) => {
        if(a.column1 > b.column1) return 1
        if(a.column1 < b.column1) return -1

        return 0
    }

    const handleSubmit = (val) => {
        console.log('submit',val);
    }

    const handleOnSearch  = (val) => {
        console.log('正在搜索 searching: ',val);
    }

  return (
    <>
      <Counter 
      constValue={1}
      Increment={'Increment'} 
      Decrement={'Decrement'}/>

      <hr/>

      <FormInput 
        fields={fields}
        onSubmit={handleSubmit}
      />

      <hr/>

      <CollapsiblePanel title={'userList'} children={"ppx"}/>

      <hr/>

    <Router>
    <Navigation/>
    <Routes>
    <Route path="/" exact element={<Home/>}/>
        <Route path="/about" exact element={<About/>}/>
        <Route path="/contact" exact element={<Contact/>}/>
    </Routes>

    </Router>

    <hr/>

    {/* <Notification type="success" message="Success! Your changes have been saved."/> */}
    <Notification type="error" message="Error! Your changes will be lost"/>

    <hr/>

    <SortableTable data={data} sortFunction={sortFunction}/>

    <hr/>

    <Modal 
    isOpen={isModalOpen} 
    onClose={closeModal}
    >
         <h2>这是一个模态框</h2>
        <p>模态框内容在这里。</p>
    </Modal>
    <button onClick={openModal}>Open Modal</button>

    <hr/>

    <Tabs tabs={tabs}/>

    <hr/>

    <Carousel images={images}/>

    <hr/>
    <SearchBar onSearch={handleOnSearch}/>

    <hr/>
    <DatePicker/>
    </>
  );
}

export default App;
