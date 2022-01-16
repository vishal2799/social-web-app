import React from 'react'
import IconButton from '../../../components/UI/IconButton/IconButton'
import CloseIcon from '@mui/icons-material/Close';
import TagIcon from '@mui/icons-material/Tag';
import { Link } from 'react-router-dom';

const tags = [
    {name: 'nature', postCount: '346K'},
    {name: 'timessquare', postCount: '923k'}
]

function Tags() {
    return (
        <div>
            {tags.map((tag) => {
                return (
                    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
                        <div style={{display: 'flex'}}>
                            <IconButton>
                                <TagIcon />
                            </IconButton>
                            <div style={{marginLeft: '10px'}}>
                                <Link to={tag.name} style={{textDecoration: 'none', color: 'black', fontSize: '14px'}}>
                                <h4 style={{margin: '0', marginBottom: '5px'}}>#{tag.name}</h4>
                                <h4 style={{margin: '0'}}>{tag.postCount}+ posts</h4>
                                </Link>
                            </div>
                        </div>
                        <IconButton>
                            <CloseIcon />
                        </IconButton>
                    </div>
                )
            })}
        </div>
    )
}

export default Tags
