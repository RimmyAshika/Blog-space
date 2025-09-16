import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import appwriteService from '../appwrite/Config/';
import { Container, PostForm } from '../components';

function EditPost() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                }
            });
        } else {
            navigate('./');
        }
    }, [slug, navigate]);
    return (
        <div className="py-8 flex text-left">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    );
}

export default EditPost;