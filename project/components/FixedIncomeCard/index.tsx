import React from "react";
import Box from "../Box";
import Card from "../Card";
import Typo from "../Typo";

type Detail = {
  label: string;
  value: number | string | React.ReactNode;
  color?: string;
};

type Props = {
  details?: Detail[];
  title?: string;
  defaultTintColor?: string;
};

function FixedIncomeCard({ details = [], title, defaultTintColor }: Props) {
  return (
    <Box>
      <Card width="100%" variant="outline">
        <Box margin="0 0 10px">
          <Typo.Text textTransform="uppercase">{title}</Typo.Text>
        </Box>
        <Box justifyContent="space-between">
          {details.map((detail, idx) => (
            <Box key={idx} flexDirection="column">
              <Typo.Text textTransform="uppercase">{detail.label}</Typo.Text>
              <Typo.Text fontSize={16} color={detail.color ?? defaultTintColor}>
                {detail.value}
              </Typo.Text>
            </Box>
          ))}
        </Box>
      </Card>
    </Box>
  );
}

export default FixedIncomeCard;
