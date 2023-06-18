import Link from 'next/link';
import React from 'react';
import { ListGroup } from 'react-bootstrap';

interface CategorizationProps {
  prefix: string;
  root: string;
}

const Categorization = ({ prefix, root }: CategorizationProps) => {
  return (
    <Link href={prefix + '/' + root}>
      <ListGroup.Item variant="flush">
        <h4>{root}</h4>
      </ListGroup.Item>
    </Link>
  );
};

export default Categorization;
