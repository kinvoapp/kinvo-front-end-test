import * as React from 'react';
export default function useForkRef<InstanceA, InstanceB>(refA: React.Ref<InstanceA> | null | undefined, refB: React.Ref<InstanceB> | null | undefined): React.Ref<InstanceA & InstanceB> | null;
