import React, { useEffect, useState, createElement } from 'react';
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import { Comment, Tooltip, Avatar, Pagination, Form, Button, Input } from 'antd';

const commentData = [
  {avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', author: 'aaaa', content: '评论内容', date: '2021-6-6', likes: 1, dislikes: 0},
  {avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', author: 'aaaa', content: '评论内容', date: '2021-6-6', likes: 0, dislikes: 1},
  {avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', author: 'aaaa', content: '评论内容', date: '2021-6-6', likes: 1, dislikes: 0},
  {avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', author: 'aaaa', content: '评论内容', date: '2021-6-6', likes: 0, dislikes: 0},
  {avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png', author: 'aaaa', content: '评论内容', date: '2021-6-6', likes: 0, dislikes: 0},
];

const { TextArea } = Input;

function like(item) {
  console.log(item);
}

function dislike(item) {
  console.log(item);
}

function ProjectComment(obj) {
  const [project, setProject] = useState({});
  const [commentList, setCommentList] = useState([]);
  const [actions, setActions] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [value, setValue] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const updateCommentList = (p, size) => {
    // TODO axios.get comment list
    console.log(p, size);
    setCommentList(commentData);
    setTotal(100);
    setPage(p);
  };
  useEffect(() => {
    setProject(obj.project);
    updateCommentList(1, 10);
  }, []);

  const onSubmit = () => {
    console.log(value);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue('');
    }, 500);
  };

  const onChange = (v) => {
    setValue(v.target.value);
  };

  return (
    <div>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
          提交
        </Button>
      </Form.Item>
      {commentList.map((item, index) => (
        <Comment
          key={index.toString()}
          actions={
            [
              <Tooltip key="comment-basic-like" title="Like">
                <span onClick={e => like(item)}>
                  {createElement(LikeOutlined)}
                  <span className="comment-action">{item.likes}</span>
                </span>
              </Tooltip>,
              <Tooltip key="comment-basic-dislike" title="Dislike">
                  <span onClick={e => dislike(item)}>
                    {React.createElement(DislikeOutlined)}
                    <span className="comment-action">{item.dislikes}</span>
                  </span>
              </Tooltip>,
              <span key="comment-list-reply-to-0">Reply to</span>,
            ]
          }
          author={item.author}
          avatar={
            <Avatar
              src={item.avatar}
              alt={item.author}
            />
          }
          content={item.content}
          datetime={
            <Tooltip title={item.date}>
              <span>{item.date}</span>
            </Tooltip>
          }
        />
      ))
      }<br />
      <div>
        <Pagination
          hideOnSinglePage
          total={total}
          showTotal={t => `共${total}项内容`}
          current={page}
          onChange={updateCommentList}
          onShowSizeChange={updateCommentList}
        />
      </div>
    </div>
  );
}

export default ProjectComment;
