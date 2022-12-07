import React from 'react';
import { useInitial } from 'dev/useInitial';

const ComponentPreviews = React.lazy(() => import('dev/previews'));

export { ComponentPreviews, useInitial };
